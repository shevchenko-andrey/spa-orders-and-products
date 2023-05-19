import { useClickOutSide } from "@/hooks/useClickOutside";
import { FC, useRef } from "react";
import { IoIosClose } from "react-icons/io";
import { BackDrop } from "../BackDrop/BackDrop";

export interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element;
}

export const Modal: FC<IModalProps> = ({ children, isOpen, handleClose }) => {
  const ref = useRef(null);

  useClickOutSide(ref, handleClose);

  if (!isOpen) {
    return <></>;
  }

  return (
    <BackDrop>
      <div className="flex justify-center items-center h-full">
        <div ref={ref} className="bg-white p-4 max-w-[80%] rounded-xl z-10 relative">
          <button
            className="absolute p-1 rounded-full shadow-slate-950 shadow-2xl bg-white -top-4 -right-4 text-2xl text-gray-500"
            onClick={handleClose}
          >
            <IoIosClose className="fill-secondary-dark" />
          </button>

          {children}
        </div>
      </div>
    </BackDrop>
  );
};
