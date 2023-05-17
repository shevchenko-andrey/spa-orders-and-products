import logoImg from "@public/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <div className="flex items-center p-3 ">
      <Image className="w-10" src={logoImg} alt="logo" />
      <p className="uppercase ml-5">inventory</p>
      <Link className="w-full h-full" href="/"></Link>
    </div>
  );
};
