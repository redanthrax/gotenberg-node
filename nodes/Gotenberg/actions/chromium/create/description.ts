import { ChromiumProperties } from '../../Interfaces';

export const chromiumCreateDescription: ChromiumProperties = [
    {
        displayName: 'Url',
        name: 'url',
        type: 'string',
        placeholder: '',
        default: '',
        description: 'Url to convert to PDF',
        displayOptions: {
            show: {
                resource: ['chromium'],
                operation: ['create'],
            },
        },
        required: true,
    },
    {
        displayName: 'Paper Width',
        name: 'paperWidth',
        type: 'number',
        placeholder: '8.5',
        default: '8.5',
        description: 'Paper width, in inches',
        displayOptions: {
            show: {
                resource: ['chromium'],
                operation: ['create'],
            },
        },
    },
    {
        displayName: 'Binary Property',
        name: 'binaryProperty',
        type: 'string',
        required: true,
        default: 'data',
        description: 'Name of the binary property to which to write to',
        displayOptions: {
            show: {
                resource: ['chromium'],
                operation: ['create'],
            },
        },
    },
];
