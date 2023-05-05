import {
  ICurrentUser,
  ILoginResponse,
  IUserCredentials,
  RegisterCredentials,
  ThunkApiConfig,
} from "@/interfaces";
import { authService } from "@/services/auth/auth.service";
import { syncActions } from "@/store/auth";
import { detectErrorMessage } from "@/utils/detect-error-message";
import { errorAlert } from "@/utils/error-alert";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk<ILoginResponse, IUserCredentials, ThunkApiConfig>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      return await authService.login(credentials);
    } catch (error) {
      const errorMessage = detectErrorMessage(error);
      errorAlert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const register = createAsyncThunk<ICurrentUser, RegisterCredentials, ThunkApiConfig>(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      return await authService.register(credentials);
    } catch (error) {
      const errorMessage = detectErrorMessage(error);
      errorAlert(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk<void, void, ThunkApiConfig>(
  "auth/logout",
  async (_, ThunkAPI) => {
    try {
      const {
        auth: { accessToken },
      } = ThunkAPI.getState();

      await authService.logout(accessToken);
    } catch (error) {
      const errorMessage = detectErrorMessage(error);
      errorAlert(errorMessage);
      return ThunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const authActions = { login, register, logout, ...syncActions };
