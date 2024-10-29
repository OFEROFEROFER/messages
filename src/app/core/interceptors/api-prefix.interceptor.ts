import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  readonly urlPrefix = "http://localhost:3000/api/"

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const newRequest = request.clone({url:`${this.urlPrefix}${request.url}`})
    return next.handle(newRequest);
  }
}
