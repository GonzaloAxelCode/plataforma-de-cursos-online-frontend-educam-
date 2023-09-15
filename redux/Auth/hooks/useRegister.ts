import { RootState } from "@/config/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { UserRegisterData } from "../interfaces/register.models";
import { signupReducer } from "../state/auth.slice";
import signUp from "../usecases/sign-up";

const useRegister = () => {
  const dispatch = useDispatch();
  const { isLoadingRegister } = useSelector((state: RootState) => state.Auth);
  const signNupWithEmail = async (user: UserRegisterData) => {
    await signUp(user, dispatch);
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
    isLoadingRegister,
    clearErrorsRegister,
  };
};

export default useRegister;
