import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpUserEvent,
  HttpResponse,
  HttpProgressEvent,
  HttpHeaderResponse,
  HttpSentEvent,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from './auth.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    return next
      .handle(this.addHeaders(req, this.authService.getAuthToken()));
  }

  addHeaders(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      }
    });
  }
}
