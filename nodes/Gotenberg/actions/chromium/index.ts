import { INodeProperties } from 'n8n-workflow';

import * as create from './create';

export { create };

export const description: INodeProperties[] = [
		{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
						show: {
								resource: ['chromium'],
						},
				},
				options: [
						{
								name: 'Create',
								value: 'create',
								description: 'Create PDF from Chromium',
								action: 'Create PDF - Chromium',
						},
				],
				default: 'create',
		},
		...create.description,
];
