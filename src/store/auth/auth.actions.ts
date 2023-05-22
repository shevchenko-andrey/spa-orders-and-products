import { ICurrentUser, IUserCredentials, RegisterCredentials, ThunkApiConfig } from "@/interfaces";
import { authService } from "@/services/auth/auth.service";
import { localStorageService } from "@/services/local-storage";
import { syncActions } from "@/store/auth";
import { detectErrorMessage } from "@/utils/detect-error-message";
import { errorAlert } from "@/utils/error-alert";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk<ICurrentUser, IUserCredentials, ThunkApiConfig>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { user, accessToken } = await authService.login(credentials);
      localStorageService.setAccessToken(accessToken);
      return user;
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
      const accessToken = localStorageService.getAccessToken();

      await authService.logout(accessToken);
      localStorageService.removeAccessToken();
    } catch (error) {
      const errorMessage = detectErrorMessage(error);
      errorAlert(errorMessage);
      return ThunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const authActions = { login, register, logout, ...syncActions };
