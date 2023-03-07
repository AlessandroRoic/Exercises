import axios from "axios";

export const BASE_URL = "http://localhost:4000/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

const errorHandler = (error: any) => {
  const statusCode = error.response?.status;

  if (statusCode && statusCode !== 401) {
    console.error(error);
  }

  return Promise.reject(error);
};

api.interceptors.response.use(undefined, (error: any) => {
  return errorHandler(error);
});
