import { getSession, signIn } from "next-auth/react";
import { DataUserLogin } from "../interfaces/register.models";
import { signInReducer } from "../state/auth.slice";

export const loginUseCase = async (user: DataUserLogin, dispatch: any) => {
  dispatch(
    signInReducer({
      isLoadingLogin: true,
    })
  );
  const res = await signIn("credentials", {
    redirect: false,
    ...user,
  });

  
  // const { isSuccess, errors } = await loginFetch(user); -- antigua forma 
  const session: any = await getSession();

  if (!res?.error) {
    console.log("session" + session);
    dispatch(
      signInReducer({
        isLoadingLogin: false,
        user: session?.user,
        loginSuccess:true
      })
    );
  } else {
    console.log("error" + session);
    dispatch(
      signInReducer({
        loginSuccess:false,
        isLoadingLogin: false,
        loginErrors: {},
      })
    );
  }
};
