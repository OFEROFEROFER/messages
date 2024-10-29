import { createSelector } from "@ngrx/store";
import { AppStateModel } from "./state-model";
 
export const selectors= {

      loginChanged: createSelector(
        (state: { stateManagement: AppStateModel }) => state.stateManagement.login,    
        login=>login     
      )
    
}
