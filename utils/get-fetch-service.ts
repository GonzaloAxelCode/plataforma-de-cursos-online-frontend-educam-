import axios, { AxiosResponse, CancelTokenSource } from "axios";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "./fetch-interfaces";
import { siteURL } from "./post-fetch-service";
import { getTokensFromLocalStorage } from "./token-utils";

// Define una interfaz genérica para las opciones de configuración de Axios
interface AxiosConfig {
  headers?: Record<string, string>;
  cancelTokenSource: CancelTokenSource;
}
const getTokens = () => {
  const { tokens } = getTokensFromLocalStorage();
  return tokens;
};
// Función genérica para realizar una solicitud GET
const getFetch = async (
  url: string,
  config: AxiosConfig
): Promise<ServiceFetchResponse> => {
  const tokens = getTokens();

  try {
    const response: AxiosResponse = await axios.get(`${siteURL}${url}`, {
      cancelToken: config.cancelTokenSource.token,
      headers: {
        ...config?.headers,
        Authorization: `JWT ${tokens?.accessToken}`,
      },
      ...config,
    });
    if (response.status === 200) {
      return {
        ...responseServiceState,
        HTTPstatus: response.status,
        data: response.data,
      };
    } else {
      return {
        ...responseServiceState,
        HTTPstatus: response.status,
        isSuccess: false,
        errors: response?.data,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      HTTPstatus: e?.response?.status,
      isSuccess: false,
      errors: e?.response?.data,
    };
  } finally {
    config.cancelTokenSource.cancel();
  }
};

export default getFetch;
