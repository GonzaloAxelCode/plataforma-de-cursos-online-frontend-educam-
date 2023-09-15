import { postFetch } from "@/utils/post-fetch-service";
import { UserRegisterData } from "../interfaces/register.models";

const registerFetch = async (user: UserRegisterData) => {
  const config = {};
  const response = await postFetch("/auth/users/", { ...user }, config);
  return response;
};

export default registerFetch;
