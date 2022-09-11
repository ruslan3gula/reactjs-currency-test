import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instanceConfig: AxiosRequestConfig = {
  // baseURL: "https://v1.nocodeapi.com/ruslan3gula/cx/TagsSjLltDAcrHCx/",
  baseURL: "https://v1.nocodeapi.com/oxmax30/cx/CKZfwWTwAZdbwnwn/",
};

//v1.nocodeapi.com/oxmax30/cx/CKZfwWTwAZdbwnwn/

const instance: AxiosInstance = axios.create(instanceConfig);

export default {
  getRates: () => instance.get("rates"),
  convert: (params: {}) => {
    return instance.get("rates/convert", {
      params,
    });
  },
};
