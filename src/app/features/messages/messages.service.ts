import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';
import { AllUserMessages, UserMessage } from './user-messages-model';
import { User } from 'src/app/core/models/users';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient:HttpClient) {

   }

   getMessages(){
    return this.httpClient.get<AllUserMessages>("messages")
   }

 
   getUsers(){
    return this.httpClient.get<User[]>("users")
   }
}
