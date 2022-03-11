import axios from "axios";

export enum MethodTypes {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

export default function useApi() {
  const callApi = (method: MethodTypes, url: string, data: object | null) => {
    const apiObject = {
      method,
      url: process.env.REACT_APP_API_BASEPATH + url,
      timeout: 30000,
      data: data ? data : undefined,
    };

    return axios(apiObject);
  };

  const callApiRaw = (
    method: MethodTypes,
    url: string,
    data: object | null
  ) => {
    const apiObject = {
      method,
      url: url,
      timeout: 30000,
      data: data ? data : undefined,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    return axios(apiObject);
  };

  const handleError = (error: Error) => {
    console.error(error);
    return Promise.reject(error);
  };

  return {
    get: (url: string) =>
      callApi(MethodTypes.Get, url, null).catch((reason) =>
        handleError(reason)
      ),
    post: (url: string, data = {}) =>
      callApi(MethodTypes.Post, url, data).catch((reason) =>
        handleError(reason)
      ),
    put: (url: string, data = {}) =>
      callApi(MethodTypes.Put, url, data).catch((reason) =>
        handleError(reason)
      ),
    delete: (url: string) =>
      callApi(MethodTypes.Delete, url, null).catch((reason) =>
        handleError(reason)
      ),
    getRaw: (url: string) =>
      callApiRaw(MethodTypes.Get, url, null).catch((reason) =>
        handleError(reason)
      ),
  };
}
