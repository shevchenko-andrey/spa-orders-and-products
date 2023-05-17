import { ResponseStatus } from "@/common/enums";
import { RootState } from "@/store";

export interface ILoginResponse {
  accessToken: string;
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

export interface IServerError {
  error: string;
  message: string;
  statusCode: ResponseStatus;
}

export interface ThunkApiConfig {
  state: RootState;
  rejectValue: string;
}

export interface IThunkError {
  error: string;
  payload: IServerError;
}

export type RegisterCredentials = IUserInfo & IUserCredentials;
