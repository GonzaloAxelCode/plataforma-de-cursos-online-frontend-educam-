import axios, { AxiosResponse, CancelTokenSource } from "axios";
import {
  ServiceFetchResponse,
  responseServiceState,
  returnNetworkError,
} from "./fetch-interfaces";
export const siteURL = process.env.NEXT_PUBLIC_APP_API_URL;



export const postFetch = async (
  url: string,
  data: any,
  config: any = {}
): Promise<ServiceFetchResponse> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  try {
    const response: AxiosResponse = await axios.post(`${siteURL}${url}`, data, {
      ...config,
      cancelToken: source.token,
    });
    if (response.status == 201   || response.status == 200) {
      return {
        ...responseServiceState,
        HTTPstatus: response.status,
      };
    } else {
      return {
        ...responseServiceState,
        isSuccess: false,
        HTTPstatus: response.status,
        errors: response?.data,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") return returnNetworkError;
    return {
      ...responseServiceState,
      isSuccess: false,
      HTTPstatus: e?.response?.status,
      errors: e?.response?.data,
    };
  } finally {
    source.cancel();
  }
};
