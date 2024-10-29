import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { stateReducer } from '../state/reducer';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,StoreModule.forRoot({stateManagement: stateReducer})]
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });

  // it('should login', () => {
  //   service.login("ofer","123").subscribe(res=>{      
  //     expect(res).toBeTrue() 
  //   })
   
  // });

  // it('should login', () => {
  //   service.hello().subscribe(res=>{      
  //     expect(res).toBeTruthy() 
  //   })   
  // });



});
