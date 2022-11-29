import { INodeProperties } from 'n8n-workflow';

import * as get from './get';

export { get };

export const description: INodeProperties[] = [
		{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
						show: {
								resource: ['health'],
						},
				},
				options: [
						{
								name: 'Get',
								value: 'get',
								description: 'Get health data from the api',
								action: 'Get health data',
						},
				],
				default: 'get',
		},
		...get.description,
];
