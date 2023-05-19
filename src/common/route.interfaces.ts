import { UserRoles } from "./enums";

export interface IAppPage {
  name: string;
  link: string;
  role?: UserRoles[];
}
