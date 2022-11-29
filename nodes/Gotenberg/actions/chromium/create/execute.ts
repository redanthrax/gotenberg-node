import { IExecuteFunctions } from 'n8n-core';

import { IDataObject, INodeExecutionData } from 'n8n-workflow';

import { gotenbergRequest } from '../../../transport';

export async function get(
		this: IExecuteFunctions,
		index: number,
): Promise<INodeExecutionData[]> {
	const qs = {} as IDataObject;
	const requestMethod = 'POST';
	const endpoint = 'forms/chromium/convert/url';
	const body = {} as IDataObject;

    const responseData = 
        await gotenbergRequest.call(this, index, requestMethod, endpoint, body, qs);

    console.log(responseData);

	return this.helpers.returnJsonArray({});
}
