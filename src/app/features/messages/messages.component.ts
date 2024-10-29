import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesService } from './messages.service';
import { AllUserMessages } from './user-messages-model';
import { BehaviorSubject, Observable, combineLatest, exhaustMap, filter, from, interval, map, mergeMap, of, startWith, switchMap, takeUntil, tap } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from 'src/app/core/models/users';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit ,OnDestroy{

  messages!:AllUserMessages
  destroy$ = new BehaviorSubject(false)

  selected:User|null=null

  form = new FormGroup({
    userName:new FormControl(),
    userType:new FormControl()
  })

  allUsers$ = interval(6000).pipe(
    startWith(-1), 
   switchMap(item=>this.messagesService.getUsers()),
   
).pipe(
  tap(item=>{  
    const user = item.find(item=>item.name === this.selected?.name)
    if(user && this.selected){
     this.selected.isOnline = user.isOnline
    }
  }
))
  userInput$ =<Observable<string>> this.form.controls.userName.valueChanges ;

  selectedUSers1$!: Observable<User[]>;

  constructor(private messagesService:MessagesService){

  }
  ngOnDestroy(): void {
    this.destroy$.next(true)  
  }

  ngOnInit(): void {
    this.messagesService.getMessages().subscribe(item=>{
      this.messages = item
    })

 
    this.selectedUSers1$ = combineLatest([this.allUsers$,this.userInput$]).pipe(
      tap(([allUsers,userInput])=>{
        if(this.selected!==null && this.selected.name !== userInput){
          this.selected= null
        }
      }),
      map(([allUsers,userInput])=> (userInput!== "" && userInput!==this.selected?.name)? allUsers.filter(user=>user.name.toLowerCase().startsWith(userInput.toLowerCase())):[]),      
    )
  }
  
  onClick(userName:User){
    this.selected =  userName
    this.form.patchValue({userName:userName.name}) 
   
  }

}
