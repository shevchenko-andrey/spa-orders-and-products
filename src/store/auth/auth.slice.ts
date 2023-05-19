import { RequestStatus, UserRoles } from "@/common/enums";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { isErrorCase, isLoadingCase } from "../app.matchers";
import { login, logout, register } from "./auth.actions";

interface IUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRoles;
}

export interface AuthState {
  user?: IUser | null;
  status: RequestStatus;
  accessToken: string;
}

const initialState: AuthState = {
  user: null,
  status: RequestStatus.INIT,
  accessToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },

    setStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = RequestStatus.SUCCESS;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.status = RequestStatus.SUCCESS;
      state.user = action.payload.user;
    });

    builder.addCase(logout.fulfilled, () => {
      return initialState;
    });

    builder.addMatcher(isLoadingCase, (state) => {
      state.status = RequestStatus.LOADING;
    });

    builder.addMatcher(isErrorCase, (state) => {
      state.status = RequestStatus.ERROR;
    });
  },
});

export const syncActions = authSlice.actions;

export const authReducer = authSlice.reducer;
