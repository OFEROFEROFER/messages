import { TestBed } from '@angular/core/testing';

import { HttpTokenInterceptor } from './http-token.interceptor';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { stateReducer } from '../state/reducer';

describe('HttoTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpTokenInterceptor,
      ]
      ,imports:    [HttpClientModule, StoreModule.forRoot({stateManagement: stateReducer})] 
  }));

  it('should be created', () => {
    const interceptor: HttpTokenInterceptor = TestBed.inject(HttpTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
