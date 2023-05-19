import { useCallback, useLayoutEffect, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useEvent = <T extends (...args: any[]) => void>(fn: T) => {
  const fnRef = useRef(fn);

  useLayoutEffect(() => {
    fnRef.current = fn;
  }, [fn]);

  const eventCb = useCallback(
    (...args: Parameters<T>) => {
      return fnRef.current.apply(null, args);
    },
    [fnRef]
  );

  return eventCb;
};
