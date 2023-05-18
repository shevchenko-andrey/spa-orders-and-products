import { UserRoles } from "@/common/enums";
import { useAppSelector } from "@/hooks";
import { getUserRole } from "@/store/auth";
import Link from "next/link";
import { FC } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { InfoPanel } from "../InfoPanel";
import { Logo } from "./Logo";

interface ITopBarProps {
  toggleDrawer: () => void;
}

export const TopBar: FC<ITopBarProps> = ({ toggleDrawer }) => {
  const role = useAppSelector(getUserRole);

  return (
    <header className="flex shadow-lg relative">
      <div className="flex justify-between m-2 items-center md:flex w-full">
        <button className="p-4 md:hidden" onClick={toggleDrawer}>
          <GiHamburgerMenu className="w-10 h-10" />
        </button>

        <Link className="hidden sm:block" href="/">
          <Logo />
        </Link>

        {role === UserRoles.ADMIN && (
          <div className="hidden mr-4 md:block">
            <InfoPanel />
          </div>
        )}

        <Link href="/basket">
          <MdOutlineShoppingCart className="w-10 h-10 fill-green" />
        </Link>
      </div>
    </header>
  );
};
