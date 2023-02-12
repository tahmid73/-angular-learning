import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {
  constructor() { }

  handleError(error:any) {
    console.log('Error Occured: ', error);
  }
}