export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserInfo {
  firstName: string;
  lastName: string;
}

export interface ICurrentUser extends IUserInfo {
  id: number;
  email: string;
}

export type RegisterRequest = IUserInfo & IUserCredentials;
