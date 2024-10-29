import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { stateReducer } from '../state/reducer';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,StoreModule.forRoot({stateManagement: stateReducer})], // Add HttpClientModule here
      providers: [LoginService] // Provide LoginService if needed
    });
    service = TestBed.inject(LoginService);
 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
