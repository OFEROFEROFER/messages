import { createAction, props } from "@ngrx/store";
import { LoginModel } from "./state-model";

export const actions={
      login: createAction("[User] Load Users" ,props<LoginModel>())

}
