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

import { AngularEntity } from '../models/angular-entity';

@Injectable({
  providedIn: 'root',
})
export class AngularControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation postDemo
   */
  static readonly PostDemoPath = '/v3/AngularController/postAngular';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postDemo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDemo$Response(params: {
    context?: HttpContext
    body: AngularEntity
  }
): Observable<StrictHttpResponse<AngularEntity>> {

    const rb = new RequestBuilder(this.rootUrl, AngularControllerService.PostDemoPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AngularEntity>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postDemo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postDemo(params: {
    context?: HttpContext
    body: AngularEntity
  }
): Observable<AngularEntity> {

    return this.postDemo$Response(params).pipe(
      map((r: StrictHttpResponse<AngularEntity>) => r.body as AngularEntity)
    );
  }

  /**
   * Path part for operation getDemo
   */
  static readonly GetDemoPath = '/v3/AngularController/getAngular';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getDemo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDemo$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<{
}>> {

    const rb = new RequestBuilder(this.rootUrl, AngularControllerService.GetDemoPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        }>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getDemo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getDemo(params?: {
    context?: HttpContext
  }
): Observable<{
}> {

    return this.getDemo$Response(params).pipe(
      map((r: StrictHttpResponse<{
}>) => r.body as {
})
    );
  }

}
