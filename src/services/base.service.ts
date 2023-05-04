import { Axios } from "axios";
import { localStorageService } from "./local-storage.service";

export class BaseService {
  constructor(private http: Axios) {
    this.http.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${localStorageService.getAccessToken()}`;

      return config;
    });
  }
}
