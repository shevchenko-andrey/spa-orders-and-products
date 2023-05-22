import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export const BackDrop: FC<PropsWithChildren> = ({ children }) => {
  return createPortal(
    <div className=" bg-black absolute top-0 left-0 w-screen h-screen bg-opacity-40">
      {children}
    </div>,
    document.body
  );
};
