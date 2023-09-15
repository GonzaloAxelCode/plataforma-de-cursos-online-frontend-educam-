
import { DataUserLogin } from "../interfaces/register.models";
import loginFetch from "../services/login-fetch";
import { signInReducer } from "../state/auth.slice";

export const loginUseCase = async (user: DataUserLogin, dispatch: any) => {
  dispatch(
    signInReducer({
      isLoadingLogin: true,
    })
  );
  const { isSuccess, errors } = await loginFetch(user);

  if (isSuccess) {
    dispatch(
      signInReducer({
        isLoadingLogin: false,
      })
    );
  } else {
    dispatch(
      signInReducer({
        isLoadingLogin: false,
        loginErrors: errors,
      })
    );
  }
};
