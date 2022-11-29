import {
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class GotenbergApi implements ICredentialType {
    name = 'gotenbergApi';
    displayName = 'Gotenberg API Credentials';
    documentationUrl = 'https://github.com/redanthrax/gotenberg-node';
    properties: INodeProperties[] = [
        {
            displayName: 'Api URL',
            name: 'url',
            type: 'string',
            default: '',
            placeholder: 'http://localhost:3000',
        },
    ];
}
