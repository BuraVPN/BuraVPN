import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorised – redirecting to login");
    }
    return Promise.reject(error);
  }
);
