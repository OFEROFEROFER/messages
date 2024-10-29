export interface AppStateModel{
    login:LoginModel 
}

export interface LoginModel{
    userName:string|null,
    token:string|null,
    success:boolean
}

export const  initialAppState: AppStateModel = {
    login:  {success:false,token:null,userName:null}
}
