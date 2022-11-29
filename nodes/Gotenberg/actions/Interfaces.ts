import { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type GotenbergMap = {
    health: 'get';
    chromium: 'create';
};

export type Gotenberg = AllEntities<GotenbergMap>;

export type GotenbergHealth = Entity<GotenbergMap, 'health'>;
export type GotenbergChromium = Entity<GotenbergMap, 'chromium'>;

export type HealthProperties = PropertiesOf<GotenbergHealth>;
export type ChromiumProperties = PropertiesOf<GotenbergChromium>;
