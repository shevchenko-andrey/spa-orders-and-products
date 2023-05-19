import Image from "next/image";
import { FC } from "react";
import { IoMdSettings } from "react-icons/io";

interface AvatarProps {
  image?: string;
  children: string;
}

export const Avatar: FC<AvatarProps> = ({ image, children }) => {
  return (
    <div className="relative flex justify-center w-24 mx-auto">
      {image ? (
        <Image
          className="rounded-full"
          src={image}
          alt="avatar"
          width={100}
          height={100}
          priority
        />
      ) : (
        <div className="flex items-center justify-center rounded-full bg-blue-500 w-24 h-24">
          <p className="text-4xl">{children || "G"}</p>
        </div>
      )}
      <div className="rounded-full p-2 bg-white shadow-md absolute bottom-1 right-1 cursor-pointer">
        <IoMdSettings className="fill-slate-500" />
      </div>
    </div>
  );
};
