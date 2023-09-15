import { responseServiceState } from "@/utils/fetch-interfaces";
import { DataUserLogin } from "../interfaces/register.models";

const loginFetch = async (user: DataUserLogin) => {
  const res = await fetch("/api/login", {
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

export default loginFetch;
