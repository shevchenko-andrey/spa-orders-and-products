import { IServerError } from "@/interfaces";
import { isAxiosError } from "axios";

export const detectErrorMessage = (error: unknown): string => {
  if (isAxiosError<IServerError>(error)) {
    return error.response?.data.message ?? "Something went wrong";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "";
};
