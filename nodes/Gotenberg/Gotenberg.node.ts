import { IExecuteFunctions } from 'n8n-core';

import * as health from './actions/health';
import * as chromium from './actions/chromium';

import {
    INodeType,
    INodeTypeDescription,
} from 'n8n-workflow';

import { router } from './actions/router';

export class Gotenberg implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Gotenberg',
        name: 'Gotenberg',
        icon: 'file:gotenberg.png',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Utilize the Gotenberg API',
        defaults: {
            name: 'Gotenberg',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'gotenbergApi',
                required: true,
            },
        ],
        requestDefaults: {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        },
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Health',
                        value: 'health',
                    },
                    {
                        name: 'Chromium',
                        value: 'chromium',
                    },
                ],
                default: 'health',
            },
            ...health.description,
            ...chromium.description,
        ],
    };

    async execute(this: IExecuteFunctions) {
            return await router.call(this);
    }
};
