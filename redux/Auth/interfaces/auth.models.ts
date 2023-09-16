import { RegisterErrors } from "./register.models";

export interface LoginErrors {
  email?: string[];
  detail?: string;
}

export interface AuthStateType {
  errorsRegister?: RegisterErrors;
  isLoadingRegister?: boolean;
  loginErrors?: LoginErrors;
  isLoadingLogin?: boolean;
  activateErrors?: any;
  isLoadingActivateAccount?: boolean;
  user?: IUser;
  loginSuccess?: boolean;
}
export interface IUser {
  date_joined?: string;
  email?: string;
  first_name?: string;
  id?: string;
  is_active?: boolean;
  is_online?: boolean;
  is_staff?: boolean;
  last_name?: string;
  picture?: string;
  role?: string;
  updated_at?: string;
  username?: string;
  verified?: boolean;
}

export interface ActivateAccountData {
  uid: string;
  token: string;
}
