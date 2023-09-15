import { RegisterErrors } from "./register.models";

export interface AuthStateType {
  errorsRegister?: RegisterErrors;
  isLoadingRegister?: boolean;
}
