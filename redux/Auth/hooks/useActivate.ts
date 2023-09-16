import { RootState } from "@/config/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { activateAccountUseCase } from "../usecases/activate-account";

const useActivate = () => {
  const stateActivate = useSelector((state: RootState) => state.Auth);
  const dispatch = useDispatch();
  const activateAccountWithToken = async (uid: string, token: string) => {
    await activateAccountUseCase({ uid, token }, dispatch);
  };

  return {
    ...stateActivate,
    activateAccountWithToken,
  };
};

export default useActivate;
