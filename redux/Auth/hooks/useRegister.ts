import { RootState } from "@/config/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserRegisterData } from "../interfaces/register.models";
import { signupReducer } from "../state/auth.slice";
import signUp from "../usecases/sign-up";

const useRegister = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(false);
  const { isLoadingRegister, errorsRegister } = useSelector(
    (state: RootState) => state.Auth
  );

  const signNupWithEmail = async (user: UserRegisterData) => {
    setIsloading(true);
    await signUp(user, dispatch);
    setIsloading(false);
  };

  const clearErrorsRegister = () => {
    dispatch(
      signupReducer({
        errorsRegister: {},
      })
    );
  };
  return {
    signNupWithEmail,
    isLoading,
    clearErrorsRegister,
    errorsRegister,
  };
};

export default useRegister;
