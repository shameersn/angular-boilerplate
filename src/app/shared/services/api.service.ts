import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../../environments/environment';

@Injectable()
export class ApiService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  public get(url: string, aueryParam: any, loader = true): Observable<any> {

    return this.http
      .get(this.getBaseUrl(url));
  }

  private getBaseUrl(url) {
    return this.baseUrl + url;
  }
}
