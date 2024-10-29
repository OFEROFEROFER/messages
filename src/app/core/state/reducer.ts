import { createReducer, on } from "@ngrx/store";
import { initialAppState } from "./state-model";
import { actions } from "./actions.";

export const stateReducer = createReducer(
    initialAppState,
    on(actions.login, (state,loginData) =>
    ({
      ...state, // Copy the existing state properties
      login: loginData // Update the 'users' property with the new value
    }))  
  );
  