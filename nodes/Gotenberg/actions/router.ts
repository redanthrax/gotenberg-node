import { IExecuteFunctions } from 'n8n-core';

import {
    IDataObject,
    INodeExecutionData,
} from 'n8n-workflow';

import { Gotenberg } from './Interfaces';

import * as health from './health';
import * as chromium from './chromium';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const operationResult: INodeExecutionData[] = [];
    let responseData: IDataObject | IDataObject[] = [];

    for (let i = 0; i < items.length; i++) {
        const resource = this.getNodeParameter<Gotenberg>('resource', i);
        const operation = this.getNodeParameter('operation', i);

        const gotenberg = {
            resource,
            operation,
        } as Gotenberg;

        try {
            switch(gotenberg.resource) {
                case 'health':
                    responseData = await health[gotenberg.operation].execute.call(this, i);
                    break;
                case 'chromium':
                    responseData = await chromium[gotenberg.operation].execute.call(this, i);
                    break;
                default:
                    break;
            }

            const executionData = this.helpers.returnJsonArray(responseData);
            operationResult.push(...executionData);
        } catch (err) {
            if (this.continueOnFail()) {
                operationResult.push({ json: this.getInputData(i)[0].json, error: err });
            } else {
                if (err.context) err.context.itemIndex = i;
                throw err;
            }
        }
    }

    return [operationResult];
};
