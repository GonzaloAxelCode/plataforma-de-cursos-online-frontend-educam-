import { responseServiceState } from "@/utils/fetch-interfaces";
import { UserRegisterData } from "../interfaces/register.models";

const registerFetch = async (user: UserRegisterData) => {
  const res = await fetch("/api/register", {
    // Esta es la ruta de tu manejador de registro
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...user,
    }),
  });

  const data = await res.json();
  if (res.status === 200 || res.status === 201) {
    return {
      ...responseServiceState,
      data,
      isSuccess: true,
    };
  } else {
    return {
      ...responseServiceState,
      errors: data,
      isSuccess: false,
    };
  }
};

export default registerFetch;
