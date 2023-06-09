import { UserRoles } from "@/common/enums";
import { RootState } from "@/store";

export const getAuth = (state: RootState) => {
  return state.auth;
};

export const getUser = (state: RootState) => {
  return (
    getAuth(state).user ?? {
      email: "",
      firstName: "",
      id: null,
      lastName: "",
      role: UserRoles.GUEST,
    }
  );
};

export const getUserRole = (state: RootState) => {
  return getUser(state)?.role ?? UserRoles.GUEST;
};

export const getStatus = (state: RootState) => {
  return getAuth(state).status;
};

export const getIsLogged = (state: RootState) => {
  return getAuth(state).isLogged;
};
