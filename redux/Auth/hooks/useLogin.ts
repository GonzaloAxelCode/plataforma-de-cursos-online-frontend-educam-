import { RootState } from "@/config/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { DataUserLogin } from "../interfaces/register.models";
import { loginUseCase } from "../usecases/login";

const useLogin = () => {
    
  const dispatch = useDispatch();

  const { loginErrors, isLoadingLogin } = useSelector(
    (state: RootState) => state.Auth
  );
  const loginWithEmail = async (user: DataUserLogin) => {
    await loginUseCase(user, dispatch);
  };

  return {
    isLoadingLogin,
    loginWithEmail,
    loginErrors,
  };
};

export default useLogin;
