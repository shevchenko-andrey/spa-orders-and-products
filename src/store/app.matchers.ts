import { Action } from "@reduxjs/toolkit";

export const isLoadingCase = (action: Action<string>) => {
  if (action.type.endsWith("/pending")) return true;

  return false;
};

export const isErrorCase = (action: Action<string>) => {
  if (action.type.endsWith("/rejected")) return true;

  return false;
};
