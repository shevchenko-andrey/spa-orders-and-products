import { store } from "@/store";
import { authActions } from "@/store/auth";
import axios, { AxiosInstance } from "axios";
import { authService } from "../auth/auth.service";

export interface IHttpServiceConfig {
  url: string;
  isPublic?: boolean;
}

export abstract class HttpService {
  http: AxiosInstance;

  constructor(private config: IHttpServiceConfig) {
    const { url, isPublic = false } = config;

    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (isPublic) {
      return;
    }

    this.http.interceptors.request.use((config) => {
      const accessToken = store.getState().auth.accessToken;
      config.headers.Authorization = "Bearer " + accessToken;
      return config;
    });

    this.http.interceptors.response.use(
      (config) => config,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          const accessToken = await authService.refreshToken();

          store.dispatch(authActions.setAccessToken(accessToken));

          originalRequest._retry = true;

          return this.http(originalRequest);
        }
        throw error;
      }
    );
  }
}
