/* eslint-disable */
// AUTO-GENERATED — do not edit by hand. Run `pnpm spec:codegen` to regenerate.
// This stub will be replaced after codegen runs from asyncapi/centrifugo.yaml.

export interface HealthUpdate {
  status: 'ok' | 'degraded' | 'down';
  changedAt: string;
  reason?: string;
}

export type RealtimeChannel = 'system:health';

export interface RealtimeChannelPayloadMap {
  'system:health': HealthUpdate;
}

export type RealtimeChannelPayload<C extends RealtimeChannel> = RealtimeChannelPayloadMap[C];
