import axios from "axios";
import { getNewToken } from "src/Services/token";
import { getCookies, setCookies } from "src/utils/Cookies";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Contect-type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookies("accessToken");
    if (accessToken) {
      request.headers[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest._retry
    )
      originalRequest._retry = true;

    const res = await getNewToken();
    if (!res?.response) return;
    setCookies(res.response.data);

    return api(originalRequest);
  }
);

export default api;
