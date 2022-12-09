/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SecurityConfiguration } from '../models/security-configuration';
import { SwaggerResource } from '../models/swagger-resource';
import { UiConfiguration } from '../models/ui-configuration';

@Injectable({
  providedIn: 'root',
})
export class ApiResourceControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation swaggerResources
   */
  static readonly SwaggerResourcesPath = '/swagger-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerResources()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SwaggerResource>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SwaggerResourcesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SwaggerResource>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swaggerResources$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources(params?: {
    context?: HttpContext
  }
): Observable<Array<SwaggerResource>> {

    return this.swaggerResources$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SwaggerResource>>) => r.body as Array<SwaggerResource>)
    );
  }

  /**
   * Path part for operation swaggerResources2
   */
  static readonly SwaggerResources2Path = '/swagger-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerResources2()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources2$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SwaggerResource>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SwaggerResources2Path, 'put');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SwaggerResource>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swaggerResources2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources2(params?: {
    context?: HttpContext
  }
): Observable<Array<SwaggerResource>> {

    return this.swaggerResources2$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SwaggerResource>>) => r.body as Array<SwaggerResource>)
    );
  }

  /**
   * Path part for operation swaggerResources1
   */
  static readonly SwaggerResources1Path = '/swagger-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerResources1()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources1$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SwaggerResource>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SwaggerResources1Path, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SwaggerResource>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swaggerResources1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources1(params?: {
    context?: HttpContext
  }
): Observable<Array<SwaggerResource>> {

    return this.swaggerResources1$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SwaggerResource>>) => r.body as Array<SwaggerResource>)
    );
  }

  /**
   * Path part for operation swaggerResources3
   */
  static readonly SwaggerResources3Path = '/swagger-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerResources3()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources3$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SwaggerResource>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SwaggerResources3Path, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SwaggerResource>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swaggerResources3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources3(params?: {
    context?: HttpContext
  }
): Observable<Array<SwaggerResource>> {

    return this.swaggerResources3$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SwaggerResource>>) => r.body as Array<SwaggerResource>)
    );
  }

  /**
   * Path part for operation swaggerResources6
   */
  static readonly SwaggerResources6Path = '/swagger-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerResources6()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources6$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SwaggerResource>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SwaggerResources6Path, 'options');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SwaggerResource>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swaggerResources6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources6(params?: {
    context?: HttpContext
  }
): Observable<Array<SwaggerResource>> {

    return this.swaggerResources6$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SwaggerResource>>) => r.body as Array<SwaggerResource>)
    );
  }

  /**
   * Path part for operation swaggerResources5
   */
  static readonly SwaggerResources5Path = '/swagger-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerResources5()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources5$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SwaggerResource>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SwaggerResources5Path, 'head');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SwaggerResource>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swaggerResources5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources5(params?: {
    context?: HttpContext
  }
): Observable<Array<SwaggerResource>> {

    return this.swaggerResources5$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SwaggerResource>>) => r.body as Array<SwaggerResource>)
    );
  }

  /**
   * Path part for operation swaggerResources4
   */
  static readonly SwaggerResources4Path = '/swagger-resources';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `swaggerResources4()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources4$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SwaggerResource>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SwaggerResources4Path, 'patch');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SwaggerResource>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `swaggerResources4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  swaggerResources4(params?: {
    context?: HttpContext
  }
): Observable<Array<SwaggerResource>> {

    return this.swaggerResources4$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SwaggerResource>>) => r.body as Array<SwaggerResource>)
    );
  }

  /**
   * Path part for operation uiConfiguration
   */
  static readonly UiConfigurationPath = '/swagger-resources/configuration/ui';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uiConfiguration()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UiConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.UiConfigurationPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UiConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uiConfiguration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration(params?: {
    context?: HttpContext
  }
): Observable<UiConfiguration> {

    return this.uiConfiguration$Response(params).pipe(
      map((r: StrictHttpResponse<UiConfiguration>) => r.body as UiConfiguration)
    );
  }

  /**
   * Path part for operation uiConfiguration2
   */
  static readonly UiConfiguration2Path = '/swagger-resources/configuration/ui';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uiConfiguration2()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration2$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UiConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.UiConfiguration2Path, 'put');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UiConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uiConfiguration2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration2(params?: {
    context?: HttpContext
  }
): Observable<UiConfiguration> {

    return this.uiConfiguration2$Response(params).pipe(
      map((r: StrictHttpResponse<UiConfiguration>) => r.body as UiConfiguration)
    );
  }

  /**
   * Path part for operation uiConfiguration1
   */
  static readonly UiConfiguration1Path = '/swagger-resources/configuration/ui';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uiConfiguration1()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration1$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UiConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.UiConfiguration1Path, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UiConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uiConfiguration1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration1(params?: {
    context?: HttpContext
  }
): Observable<UiConfiguration> {

    return this.uiConfiguration1$Response(params).pipe(
      map((r: StrictHttpResponse<UiConfiguration>) => r.body as UiConfiguration)
    );
  }

  /**
   * Path part for operation uiConfiguration3
   */
  static readonly UiConfiguration3Path = '/swagger-resources/configuration/ui';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uiConfiguration3()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration3$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UiConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.UiConfiguration3Path, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UiConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uiConfiguration3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration3(params?: {
    context?: HttpContext
  }
): Observable<UiConfiguration> {

    return this.uiConfiguration3$Response(params).pipe(
      map((r: StrictHttpResponse<UiConfiguration>) => r.body as UiConfiguration)
    );
  }

  /**
   * Path part for operation uiConfiguration6
   */
  static readonly UiConfiguration6Path = '/swagger-resources/configuration/ui';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uiConfiguration6()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration6$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UiConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.UiConfiguration6Path, 'options');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UiConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uiConfiguration6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration6(params?: {
    context?: HttpContext
  }
): Observable<UiConfiguration> {

    return this.uiConfiguration6$Response(params).pipe(
      map((r: StrictHttpResponse<UiConfiguration>) => r.body as UiConfiguration)
    );
  }

  /**
   * Path part for operation uiConfiguration5
   */
  static readonly UiConfiguration5Path = '/swagger-resources/configuration/ui';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uiConfiguration5()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration5$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UiConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.UiConfiguration5Path, 'head');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UiConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uiConfiguration5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration5(params?: {
    context?: HttpContext
  }
): Observable<UiConfiguration> {

    return this.uiConfiguration5$Response(params).pipe(
      map((r: StrictHttpResponse<UiConfiguration>) => r.body as UiConfiguration)
    );
  }

  /**
   * Path part for operation uiConfiguration4
   */
  static readonly UiConfiguration4Path = '/swagger-resources/configuration/ui';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uiConfiguration4()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration4$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UiConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.UiConfiguration4Path, 'patch');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UiConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uiConfiguration4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uiConfiguration4(params?: {
    context?: HttpContext
  }
): Observable<UiConfiguration> {

    return this.uiConfiguration4$Response(params).pipe(
      map((r: StrictHttpResponse<UiConfiguration>) => r.body as UiConfiguration)
    );
  }

  /**
   * Path part for operation securityConfiguration
   */
  static readonly SecurityConfigurationPath = '/swagger-resources/configuration/security';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityConfiguration()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SecurityConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SecurityConfigurationPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecurityConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `securityConfiguration$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration(params?: {
    context?: HttpContext
  }
): Observable<SecurityConfiguration> {

    return this.securityConfiguration$Response(params).pipe(
      map((r: StrictHttpResponse<SecurityConfiguration>) => r.body as SecurityConfiguration)
    );
  }

  /**
   * Path part for operation securityConfiguration2
   */
  static readonly SecurityConfiguration2Path = '/swagger-resources/configuration/security';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityConfiguration2()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration2$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SecurityConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SecurityConfiguration2Path, 'put');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecurityConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `securityConfiguration2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration2(params?: {
    context?: HttpContext
  }
): Observable<SecurityConfiguration> {

    return this.securityConfiguration2$Response(params).pipe(
      map((r: StrictHttpResponse<SecurityConfiguration>) => r.body as SecurityConfiguration)
    );
  }

  /**
   * Path part for operation securityConfiguration1
   */
  static readonly SecurityConfiguration1Path = '/swagger-resources/configuration/security';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityConfiguration1()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration1$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SecurityConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SecurityConfiguration1Path, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecurityConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `securityConfiguration1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration1(params?: {
    context?: HttpContext
  }
): Observable<SecurityConfiguration> {

    return this.securityConfiguration1$Response(params).pipe(
      map((r: StrictHttpResponse<SecurityConfiguration>) => r.body as SecurityConfiguration)
    );
  }

  /**
   * Path part for operation securityConfiguration3
   */
  static readonly SecurityConfiguration3Path = '/swagger-resources/configuration/security';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityConfiguration3()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration3$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SecurityConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SecurityConfiguration3Path, 'delete');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecurityConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `securityConfiguration3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration3(params?: {
    context?: HttpContext
  }
): Observable<SecurityConfiguration> {

    return this.securityConfiguration3$Response(params).pipe(
      map((r: StrictHttpResponse<SecurityConfiguration>) => r.body as SecurityConfiguration)
    );
  }

  /**
   * Path part for operation securityConfiguration6
   */
  static readonly SecurityConfiguration6Path = '/swagger-resources/configuration/security';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityConfiguration6()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration6$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SecurityConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SecurityConfiguration6Path, 'options');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecurityConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `securityConfiguration6$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration6(params?: {
    context?: HttpContext
  }
): Observable<SecurityConfiguration> {

    return this.securityConfiguration6$Response(params).pipe(
      map((r: StrictHttpResponse<SecurityConfiguration>) => r.body as SecurityConfiguration)
    );
  }

  /**
   * Path part for operation securityConfiguration5
   */
  static readonly SecurityConfiguration5Path = '/swagger-resources/configuration/security';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityConfiguration5()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration5$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SecurityConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SecurityConfiguration5Path, 'head');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecurityConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `securityConfiguration5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration5(params?: {
    context?: HttpContext
  }
): Observable<SecurityConfiguration> {

    return this.securityConfiguration5$Response(params).pipe(
      map((r: StrictHttpResponse<SecurityConfiguration>) => r.body as SecurityConfiguration)
    );
  }

  /**
   * Path part for operation securityConfiguration4
   */
  static readonly SecurityConfiguration4Path = '/swagger-resources/configuration/security';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `securityConfiguration4()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration4$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<SecurityConfiguration>> {

    const rb = new RequestBuilder(this.rootUrl, ApiResourceControllerService.SecurityConfiguration4Path, 'patch');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SecurityConfiguration>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `securityConfiguration4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  securityConfiguration4(params?: {
    context?: HttpContext
  }
): Observable<SecurityConfiguration> {

    return this.securityConfiguration4$Response(params).pipe(
      map((r: StrictHttpResponse<SecurityConfiguration>) => r.body as SecurityConfiguration)
    );
  }

}
