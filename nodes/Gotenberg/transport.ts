import { OptionsWithUri } from 'request';

import { IExecuteFunctions, IHookFunctions, ILoadOptionsFunctions } from 'n8n-core';

import {
    IDataObject,
    IExecuteSingleFunctions,
    IHttpRequestMethods,
    IPollFunctions,
} from 'n8n-workflow';


export async function gotenbergRequest(
    this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions,
    index: number,
    method: IHttpRequestMethods,
    endpoint: string,
    body: IDataObject = {},
    qs: IDataObject = {},
):Promise<IDataObject> {
    const responseData = await apiRequest.call(this, method, endpoint, qs, body);
    console.log(responseData);
    return responseData;
}

export async function apiRequest(
    this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions | IPollFunctions | IHookFunctions,
    method: IHttpRequestMethods,
    endpoint: string,
    body: IDataObject = {},
    qs: IDataObject = {},
):Promise<IDataObject> {
    const creds = await this.getCredentials('gotenbergApi');
    const options: OptionsWithUri = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method,
        body,
        qs,
        uri: `${creds.url}/${endpoint}`,
        qsStringifyOptions: {
            arrayFormat: 'repeat',
        },
        json: true,
    }; 

    //@ts-ignore
    const responseData = (await this.helpers.request(options)) as IDataObject;
    return responseData;
}
