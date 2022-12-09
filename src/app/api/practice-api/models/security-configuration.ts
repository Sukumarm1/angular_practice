/* tslint:disable */
/* eslint-disable */
export interface SecurityConfiguration {
  additionalQueryStringParams?: {
[key: string]: {
};
};
  /** @deprecated */apiKey?: string;
  /** @deprecated */apiKeyName?: string;
  /** @deprecated */apiKeyVehicle?: string;
  appName?: string;
  clientId?: string;
  clientSecret?: string;
  realm?: string;
  scopeSeparator?: string;
  useBasicAuthenticationWithAccessCodeGrant?: boolean;
}
