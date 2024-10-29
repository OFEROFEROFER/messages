import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStateModel } from '../state/state-model';
import { selectors } from '../state/selectors';
import { LoginService } from '../services/login.service';
 
@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private store: Store<{stateManagement:AppStateModel}> ,
    private loginService:LoginService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    
      const token = this.loginService.getLoginData().token
      const newHeaders = request.headers.append("token",String(token??""))
      const clonedRequest = request.clone({headers:newHeaders})
      return next.handle(clonedRequest);
         
  }
}
