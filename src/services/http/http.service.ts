import axios, { AxiosInstance } from "axios";
import { authService } from "../auth/auth.service";
import { localStorageService } from "../local-storage";

export interface IHttpServiceConfig {
  url?: string;
  isPublic?: boolean;
}

export abstract class HttpService {
  protected http: AxiosInstance;

  constructor(private config: IHttpServiceConfig) {
    const { url = "", isPublic = false } = config;

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
      const accessToken = localStorageService.getAccessToken();
      config.headers.Authorization = "Bearer " + accessToken;
      return config;
    });

    this.http.interceptors.response.use(
      (config) => config,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          const accessToken = await authService.refreshToken();

          localStorageService.setAccessToken(accessToken);

          originalRequest._retry = true;

          return this.http(originalRequest);
        }
        throw error;
      }
    );
  }
}
