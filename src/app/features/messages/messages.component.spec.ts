import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesService } from './messages.service';
import { AllUserMessages } from './user-messages-model';
import { of } from 'rxjs';
import { User } from 'src/app/core/models/users';
import { By } from '@angular/platform-browser';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let messagesService: jasmine.SpyObj<MessagesService>;

 
    // Define mock data for messages and users
    const mockMessages: AllUserMessages = {
      incoming: [
        {
          "fromUser": "john_doe",
          "toUser": "ofer",
          "sendTime": "1729502130",
          "title": "Meeting Reminder",
          "content": "Don’t forget about the meeting at 2 PM.",
          "isRead": true
        },
        {
          "fromUser": "jane_smith",
          "toUser": "ofer",
          "sendTime": "1729497900",
          "title": "Project Update",
          "content": "The project is moving forward as planned.",
          "isRead": false
        },
        {
          "fromUser": "alex_jones",
          "toUser": "ofer",
          "sendTime": "1729434600",
          "title": "Code Review",
          "content": "Please review the latest changes I made.",
          "isRead": false
        },
        {
          "fromUser": "linda_wilson",
          "toUser": "ofer",
          "sendTime": "1729440645",
          "title": "Lunch Invitation",
          "content": "Do you want to grab lunch tomorrow?",
          "isRead": true
        },
      ],
      outgoing: [
        {
          "fromUser": "ofer",
          "toUser": "john_doe",
          "sendTime": "1729502130",
          "title": "Meeting Reminder",
          "content": "Don’t forget about the meeting at 2 PM.",
          "isRead": true
        },
        {
          "fromUser": "ofer",
          "toUser": "jane_smith",
          "sendTime": "1729497900",
          "title": "Project Update",
          "content": "The project is moving forward as planned.",
          "isRead": false
        },
        {
          "fromUser": "ofer",
          "toUser": "alex_jones",
          "sendTime": "1729434600",
          "title": "Code Review",
          "content": "Please review the latest changes I made.",
          "isRead": false
        },
        {
          "fromUser": "ofer",
          "toUser": "linda_wilson",
          "sendTime": "1729440645",
          "title": "Lunch Invitation",
          "content": "Do you want to grab lunch tomorrow?",
          "isRead": true
        },
      
      ]
    };

    const getUsersMock:User[] =  
      [
        {
          "name": "Alice",
          "type": 1,
          "isOnline": true
        },
        {
          "name": "Bob",
          "type": 2,
          "isOnline": false
        },
        {
          "name": "Charlie",
          "type": 3,
          "isOnline": true
        },
        {
          "name": "Diana",
          "type": 4,
          "isOnline": false
        },
        {
          "name": "Ethan",
          "type": 5,
          "isOnline": true
        },
        {
          "name": "Ofer",
          "type": 1,
          "isOnline": false
        },
        {
          "name": "Ofer2",
          "type": 1,
          "isOnline": false
        },
        {
          "name": "Ofer3",
          "type": 1,
          "isOnline": false
        },
        {
          "name": "Ofer4",
          "type": 1,
          "isOnline": false
        },
        {
          "name": "Ofer5",
          "type": 1,
          "isOnline": false
        },
        {
          "name": "George",
          "type": 2,
          "isOnline": true
        },
        {
          "name": "Hannah",
          "type": 3,
          "isOnline": false
        },
        {
          "name": "Isaac",
          "type": 4,
          "isOnline": true
        },
        {
          "name": "Julia",
          "type": 5,
          "isOnline": false
        },
        {
          "name": "Liam",
          "type": 1,
          "isOnline": true
        },
        {
          "name": "Mia",
          "type": 2,
          "isOnline": false
        },
        {
          "name": "Noah",
          "type": 3,
          "isOnline": true
        },
        {
          "name": "Olivia",
          "type": 4,
          "isOnline": false
        },
        {
          "name": "Sophia",
          "type": 5,
          "isOnline": true
        },
        {
          "name": "Ava",
          "type": 1,
          "isOnline": false
        },
        {
          "name": "Emma",
          "type": 2,
          "isOnline": true
        },
        {
          "name": "Jack",
          "type": 3,
          "isOnline": false
        },
        {
          "name": "Lucas",
          "type": 4,
          "isOnline": true
        },
        {
          "name": "Zoe",
          "type": 5,
          "isOnline": false
        },
        {
          "name": "Mason",
          "type": 1,
          "isOnline": true
        }
      ]
      
    
    
  
  beforeEach(  () => {
    // Create a spy object for MessagesService with mocked methods
      
      messagesService = jasmine.createSpyObj('MessagesService', ['getMessages', 'getUsers']);
      messagesService.getMessages.and.returnValue(of(mockMessages)); // Simulate service response
      messagesService.getUsers.and.returnValue(of(getUsersMock));

      TestBed.configureTestingModule({
      imports: [MessagesComponent,HttpClientModule],
      providers: [{ provide: MessagesService, useValue: messagesService }]
    });
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Get the spy instance for further configurations
    // messagesService = TestBed.inject(MessagesService) as jasmine.SpyObj<MessagesService>;

    // Simulate service responses
    // messagesService.getMessages.and.returnValue(of(mockMessages));
    // messagesService.getUsers.and.returnValue(of(mockUsers));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('get messages list', () => {
  //   messagesService.getMessages().subscribe(item=>{
  //     expect(item.incoming.length === 4 && item.outgoing.length === 4  ).toBeTrue();
  //   })    
  // });

  it('get filtered list', () => {
    const inputElement = fixture.nativeElement.querySelector('input[formControlName="userName"]');
    //const dropDownDiv = fixture.nativeElement.querySelector('drop-down');

    //dropDownDiv.nativeElement.children.length;

    //inputElement.value = "ofer"; // Set the value
    fixture.detectChanges(); // Update bindings
    expect(inputElement).toBeTruthy()
  });


  it('should count dropdown items based on user input', () => {
    // Simulate user input
    const inputElement = fixture.debugElement.query(By.css('input[formControlName="userName"]'));
    inputElement.nativeElement.value = 'j'; // Simulate typing 'j'
    inputElement.nativeElement.dispatchEvent(new Event('input')); // Trigger input event

    fixture.detectChanges(); // Update the view

    // Get the dropdown list
    const dropdownItems = fixture.debugElement.queryAll(By.css('.drop-down .user-container'));

    // Check the number of items
    expect(dropdownItems.length).toBe(2); // Expecting 2 items (john_doe and jane_smith)
  });

  
});
