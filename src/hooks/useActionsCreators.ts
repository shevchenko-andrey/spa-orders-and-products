import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { ActionCreatorsMapObject, bindActionCreators } from "redux";
import { AppDispatch } from "../store";

export const useActionsCreator = <T extends ActionCreatorsMapObject>(
  actions: T
): { [K in keyof T]: (...args: Parameters<T[K]>) => ReturnType<T[K]> } => {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};
