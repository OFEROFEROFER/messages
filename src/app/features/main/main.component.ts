import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MessagesService } from '../messages/messages.service';
import { LoginService } from 'src/app/core/services/login.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(private router:Router, 
    // private messagesService:MessagesService,
    // private loginService:LoginService,
    // private apiService:ApiService
  ){

  }

  ngOnInit(): void {
    
 
  }

  onMessages(){
    this.router.navigateByUrl("messages")
  }
}
