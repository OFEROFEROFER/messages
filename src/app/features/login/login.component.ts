import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import { finalize } from 'rxjs';
import { AppStateModel } from 'src/app/core/state/state-model';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/core/state/actions.';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule]
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  })

  isLoading = false

  constructor(private apiService:ApiService,
    private messagesService:MessagesService,
    private store: Store<{stateManagement:AppStateModel}> 
  ){

  }

  ngOnInit(): void {
    // this.messagesService.getMessages().subscribe(item=>{
    //   console.log(item)
    // })

  }

  testApi(){

  }

  submit(){
    console.log(this.form.value)
    this.isLoading = true
    this.apiService.login(this.form.value.userName,this.form.value.password).pipe(finalize(()=>{this.isLoading=false})).subscribe(item=>{
      //console.log(item)
      this.store.dispatch(actions.login(item))
    })
    // this.apiService.hello().subscribe(item=>{
    //   console.log(item)
    // })
  }
}

