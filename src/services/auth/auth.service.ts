import { ICurrentUser, ILoginResponse, IUserCredentials } from "@/interfaces";
import { RegisterCredentials } from "@/interfaces/auth.interface";
import axios from "axios";

class AuthService {
  constructor(
    private http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
      headers: {
        "Content-Type": "application/json",
      },
    })
  ) {}

  async register(registerCredentials: RegisterCredentials) {
    const { data } = await this.http.post<ICurrentUser>("/register", registerCredentials);
    return data;
  }

  async login(credentials: IUserCredentials) {
    const { data } = await this.http.post<ILoginResponse>("/login", credentials);
    return data;
  }

  async refreshToken() {
    const { data } = await this.http.get<ILoginResponse>("/refresh-token");
    return data.accessToken;
  }

  async logout(accessToken: string) {
    await this.http.post<void>(
      "/logout",
      {},
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    );
  }
}

export const authService = new AuthService();
