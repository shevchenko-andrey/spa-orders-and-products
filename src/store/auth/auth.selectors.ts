import { RootState } from "@/store";

export const getAuth = (state: RootState) => {
  return state.auth;
};

export const getUser = (state: RootState) => {
  return getAuth(state).user;
};

export const getStatus = (state: RootState) => {
  return getAuth(state).status;
};

export const getAccessToken = (state: RootState) => {
  return getAuth(state).accessToken;
};
