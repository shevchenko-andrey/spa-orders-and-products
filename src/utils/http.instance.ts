import { store } from "@/store";
import { refreshToken as refreshTokenMutation } from "@/store/auth";
import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      const refreshToken = store.getState().auth.refreshToken;

      await store.dispatch(refreshTokenMutation.initiate(refreshToken));

      // Update the authorization header with the new access token
      const { accessToken } = store.getState().auth;
      originalRequest._retry = true;
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;

      // Retry the original request with the new access token
      return http(originalRequest);
    }

    return Promise.reject(error);
  }
);
