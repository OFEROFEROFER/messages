import { TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/core/services/login.service';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Add HttpClientModule here
      //  providers: [HttpClient] // Provide LoginService if needed
    });
    service = TestBed.inject(MessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });
});
