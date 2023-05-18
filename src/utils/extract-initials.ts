import { IUserInfo } from "@/interfaces";

export const extractInitials = ({ firstName, lastName }: Omit<IUserInfo, "role">) => {
  if (!firstName || !lastName) {
    return "";
  }

  return firstName[0] + lastName[0];
};
