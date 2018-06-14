import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {
  handleError(err) {
    console.log('err', err);
  }
}
