import Image from "next/image";
import { IoMdSettings } from "react-icons/io";
interface AvatarProps {
  image: string;
}

export const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <div className="relative flex justify-center w-24 mx-auto">
      <Image className="rounded-full" src={image} alt="avatar" width={100} height={100} priority />
      <div className="rounded-full p-2 bg-white shadow-md absolute bottom-1 right-1 cursor-pointer">
        <IoMdSettings className="fill-slate-500" />
      </div>
    </div>
  );
};
