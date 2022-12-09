/* tslint:disable */
/* eslint-disable */
export interface UiConfiguration {
  /** @deprecated */apisSorter?: string;
  deepLinking?: boolean;
  defaultModelExpandDepth?: number;
  defaultModelRendering?: 'example' | 'model';
  defaultModelsExpandDepth?: number;
  displayOperationId?: boolean;
  displayRequestDuration?: boolean;
  docExpansion?: 'none' | 'list' | 'full';
  filter?: {
};
  /** @deprecated */jsonEditor?: boolean;
  maxDisplayedTags?: number;
  operationsSorter?: 'alpha' | 'method';
  showExtensions?: boolean;
  /** @deprecated */showRequestHeaders?: boolean;
  supportedSubmitMethods?: Array<string>;
  tagsSorter?: 'alpha';
  validatorUrl?: string;
}
