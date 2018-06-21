import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

export class CustomErrorHandler implements ErrorHandler {
  handleError(err: HttpErrorResponse | any) {
    if (err instanceof HttpErrorResponse) {
      console.log('http err', err);
    } else {
      console.error('err', err);
    }
  }
}
