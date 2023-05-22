import { LocalStorageKeys } from "@/common/enums";

class LocalStorageService {
  public getAccessToken() {
    return localStorage.getItem(LocalStorageKeys.ACCESS_TOKEN) ?? "";
  }

  public setAccessToken(token: string) {
    return localStorage.setItem(LocalStorageKeys.ACCESS_TOKEN, token);
  }

  public removeAccessToken() {
    return localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
  }
}
export const localStorageService = new LocalStorageService();
