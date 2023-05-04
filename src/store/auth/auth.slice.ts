import { ICurrentUser, ILoginResponse, IUserCredentials, RegisterRequest } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  user: IUser | null;
  isLoggedIn: boolean;
  isFetching: boolean;
  accessToken: string;
  refreshToken: string;
  error: null | string;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isFetching: false,
  accessToken: "",
  refreshToken: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.accessToken = "";
      state.refreshToken = "";
      state.user = null;
    },
  },
});

const api = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === "HYDRATE") {
      return action.payload[reducerPath];
    }
  },

  endpoints: (builder) => ({
    register: builder.mutation<ICurrentUser, RegisterRequest>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    refreshToken: builder.mutation<ILoginResponse, string>({
      query: (token) => ({
        url: "/refresh",
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }),
    }),

    login: builder.mutation<ILoginResponse, IUserCredentials>({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRefreshTokenMutation, useLoginMutation, useRegisterMutation } = api;

export const refreshToken = api.endpoints.refreshToken;

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
