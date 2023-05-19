import { MutableRefObject, useEffect } from "react";

type THandler = () => void;

export const useClickOutSide = (ref: MutableRefObject<null | HTMLElement>, handler: THandler) => {
  const handleClick = (event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return ref;
};
