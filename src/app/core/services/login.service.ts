import { Injectable } from '@angular/core';
import { AppStateModel, LoginModel } from '../state/state-model';
import { ApiService } from './api.service';
import { Store } from '@ngrx/store';
import { selectors } from '../state/selectors';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginData!:LoginModel

  constructor(private apiService:ApiService,
    private router:Router,
    private store: Store<{stateManagement:AppStateModel}> ,
  ) {


    this.store.select(selectors.loginChanged).subscribe(item=>{
      this.loginData = item
      if(this.loginData.success){
        this.router.navigateByUrl("main")
      }
      if(!this.loginData.success){
        this.router.navigateByUrl("")
      }
    })
   }
  
  getLoginData() {
    return this.loginData
  }
}
