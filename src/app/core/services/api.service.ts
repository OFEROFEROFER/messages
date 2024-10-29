import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateModel, LoginModel } from '../state/state-model';
import { actions } from '../state/actions.';
import { selectors } from '../state/selectors';

@Injectable({
  providedIn: 'root',  
})
export class ApiService {

  //readonly url = "http://localhost:3000/api/"
  constructor(private httpClient:HttpClient,
    private store: Store<{stateManagement:AppStateModel}> 
  ) { 

    this.store.select(selectors.loginChanged).subscribe(item=>{
      console.log("--->"+item)
    })
 
  }

  login(userName:string, password:string):Observable<LoginModel>{
     const reply = this.httpClient.post<LoginModel>(`login`,{userName,password})     
     return reply
  }

  hello():Observable<any>{
    return this.httpClient.get(`hello`)
  }
}

 