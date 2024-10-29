import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { Store, StoreModule } from '@ngrx/store';
import { stateReducer } from 'src/app/core/state/reducer';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { MessagesService } from '../messages/messages.service';
import { actions } from 'src/app/core/state/actions.';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  let messagesService: jasmine.SpyObj<MessagesService>;
  let store: jasmine.SpyObj<Store<any>>;

  beforeEach(() => {
        // Create spies for dependencies
        const apiServiceSpy = jasmine.createSpyObj('ApiService', ['login']);
        const messagesServiceSpy = jasmine.createSpyObj('MessagesService', ['getMessages']);
        const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);

    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useValue: ApiService },
        { provide: MessagesService, useValue: MessagesService },
        { provide: Store, useValue: storeSpy },
      ],
      imports:[HttpClientModule, LoginComponent, StoreModule.forRoot({stateManagement: stateReducer})]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    messagesService = TestBed.inject(MessagesService) as jasmine.SpyObj<MessagesService>;
    store = TestBed.inject(Store) as jasmine.SpyObj<Store<any>>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should set isLoading to true and dispatch login action on submit', () => {
  //   // Arrange: Set form values
  //   component.form.setValue({ userName: 'testUser', password: 'testPass' });

  //   // Mock the API call to return a successful login response
  //   const loginResponse = { userName: 'testUser', token: 'abc123', success: true };
  //   apiService.login.and.returnValue(of(loginResponse));

  //   // Act: Call the submit method
  //   component.submit();

  //   // Assert: Check expectations
  //   expect(component.isLoading).toBeTrue();
  //   expect(apiService.login).toHaveBeenCalledOnceWith('testUser', 'testPass');

  //   // Complete the observable and trigger finalize
  //   fixture.detectChanges();
  //   expect(store.dispatch).toHaveBeenCalledOnceWith(actions.login(loginResponse));
  //   expect(component.isLoading).toBeFalse();
  // });
  
});
