import logoImg from "@public/logo.png";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center p-3 ">
      <Image className="w-10" src={logoImg} alt="logo" />
      <p className="uppercase ml-5">Inventory</p>
    </div>
  );
};
