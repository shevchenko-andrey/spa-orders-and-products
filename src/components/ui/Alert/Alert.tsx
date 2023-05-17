import { FC } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";

interface IAlertProps {
  message: string;
}

export const Alert: FC<IAlertProps> = ({ message }) => {
  return (
    <div className="flex justify-between items-center rounded-md text-white border p-3 bg-purple-500 ">
      <MdOutlineErrorOutline className="fill-white" />
      <p className="ml-2">{message}</p>
    </div>
  );
};
