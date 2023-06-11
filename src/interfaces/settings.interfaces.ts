import { IUserCredentials } from "./auth.interface";

export interface IUserSettings extends IUserCredentials {
  firstName: string;
  lastName: string;
}
