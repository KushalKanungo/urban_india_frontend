import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toasterService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError((err: HttpErrorResponse) => this.httpErrorHandeler(err)))
  }

  private httpErrorHandeler(err: HttpErrorResponse){
    if( err.status >= 500){
      this.toasterService.add({
        severity: 'error',
        data: 'Somthing went wrong.',
      })
    }
    else if(err.status >= 400 && err.status < 500){
      this.toasterService.add({
        severity: 'warn',
        data: err.error.errorMessage,
        detail: err.error.errorMessage,
      })
    }

    return throwError(()=> err)
  }
}
