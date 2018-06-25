import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import { environment } from './../../../environments/environment';

@Injectable()
export class ApiService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  public get(url: string, queryParams: any = {}, loader = true): Observable<any> {
    // start loader
    return this.http
      .get(this.getBaseUrl(url), {params: queryParams})
      .catch((err: HttpErrorResponse) => Observable.throw(err))
      .finally(() => {
        // hide loader
      });
  }

  public post(url: string, body: any = {}, loader = true): Observable<any> {
    // start loader
    return this.http
      .post(this.getBaseUrl(url), body)
      .catch((err: HttpErrorResponse) => Observable.throw(err))
      .finally(() => {
        // hide loader
      });
  }

  public put(url: string, body: any = {}, loader = true): Observable<any> {
    // start loader
    return this.http
      .put(this.getBaseUrl(url), body)
      .catch((err: HttpErrorResponse) => Observable.throw(err))
      .finally(() => {
        // hide loader
      });
  }

  public delete(url: string, params: any = {}, loader = true): Observable<any> {
    // start loader
    return this.http
      .delete(this.getBaseUrl(url), params)
      .catch((err: HttpErrorResponse) => Observable.throw(err))
      .finally(() => {
        // hide loader
      });
  }

  private getBaseUrl(url) {
    return this.baseUrl + url;
  }

}
