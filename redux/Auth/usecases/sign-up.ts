import { UserRegisterData } from "../interfaces/register.models";
import registerFetch from "../services/register-fetch";
import { signupReducer } from "../state/auth.slice";

export default async function signUp(user: UserRegisterData, dispatch: any) {
  
  dispatch(
    signupReducer({
      isLoadingRegister: true,
    })
  );
  const { isSuccess, errors } = await registerFetch(user);
  
  
  if (isSuccess) {
    dispatch(
      signupReducer({
        isLoadingRegister: false,
      })
    );
    console.log("Existo al agregar un usuario");
  } else {
    dispatch(
      signupReducer({
        isLoadingRegister: false,
        errorsRegister: errors,
      })
    );
    console.log("Hubo errores");
    console.log(errors);
  }
}
