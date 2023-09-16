import { RootState } from "@/config/redux/store";
import { useSelector } from "react-redux";

const useAuth = () => {
  const authState = useSelector((state: RootState) => state.Auth);

  return {
    ...authState,
  };
};

export default useAuth;
