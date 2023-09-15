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
}
