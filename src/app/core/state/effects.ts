import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, filter, map, mergeMap, tap, throwError } from "rxjs";
import { actions } from "./actions.";
import { Router } from "@angular/router";

export class AppEffects {

    constructor(private readonly actions$: Actions,
                private router:Router
    ) {}

    loadUsers$ = createEffect(() => this.actions$.pipe(
      ofType(actions.login), // Action type to listen for
      filter(login => login.success)
    ))
} 
    
       
  