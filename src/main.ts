import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments';
import { provideRouter } from '@angular/router';
 import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { stateReducer } from './app/core/state/reducer';
import { AppEffects } from './app/core/state/effects';
import { ApiPrefixInterceptor } from './app/core/interceptors/api-prefix.interceptor';
import { HttpTokenInterceptor } from './app/core/interceptors/http-token.interceptor';
import { LoginComponent } from './app/features/login/login.component';
import { MainComponent } from './app/features/main/main.component';
import { MessagesComponent } from './app/features/messages/messages.component';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,{providers:[
    provideRouter([
      { path: '', component: LoginComponent },
      { path: 'main', component: MainComponent },
      { path: 'messages', component: MessagesComponent },
    ]),
    
    provideStore({ stateManagement: stateReducer }),
    // provideEffects([AppEffects]), 
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    }
]})
  .catch(err => console.error(err));
  
 
