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
  isLogged: boolean;
}

const initialState: AuthState = {
  user: null,
  status: RequestStatus.INIT,
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
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
      state.status = RequestStatus.SUCCESS;
      state.user = action.payload;
      state.isLogged = true;
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
