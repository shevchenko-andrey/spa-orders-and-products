class LocalStorageService {
  getAccessToken() {
    return localStorage.getItem("token");
  }

  setAccessToken(token: string) {
    return localStorage.setItem("token", token);
  }
}

export const localStorageService = new LocalStorageService();
