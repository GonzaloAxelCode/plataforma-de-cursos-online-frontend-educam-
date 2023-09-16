import { responseServiceState } from "@/utils/fetch-interfaces";
import { ActivateAccountData } from "../interfaces/auth.models";



const activateAccountFetch = async (dataAct: ActivateAccountData) => {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...dataAct,
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

export default activateAccountFetch;
