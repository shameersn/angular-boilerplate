import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from './../../../environments/environment';

@Injectable()
export class ApiService {
  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  public get(url: string, queryParam?: any, loader = true): Observable<any> {

    return this.http
      .get(this.getBaseUrl(url))
      .map((res: Response) => res.json())
      .catch((err: Response) => Observable.throw(err));
  }

  private getBaseUrl(url) {
    return this.baseUrl + url;
  }

}
