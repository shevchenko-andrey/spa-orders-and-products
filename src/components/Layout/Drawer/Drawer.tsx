import { UserRoles } from "@/common/enums";
import { IAppPage } from "@/common/route.interfaces";
import { BackDrop } from "@/components/ui/BackDrop/BackDrop";
import { useActionsCreator, useAppSelector } from "@/hooks";
import { authActions, getUser, getUserRole } from "@/store/auth";
import { extractInitials } from "@/utils/extract-initials";
import cn from "classnames";
import Link from "next/link";
import { FC, useMemo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { NavMenu } from "../NavMenu";

interface IDrawerProps {
  pages: IAppPage[];
  isDropdownOpen: boolean;
  handleDropdownIsOpen: () => void;
}

export const Drawer: FC<IDrawerProps> = ({ pages, isDropdownOpen, handleDropdownIsOpen }) => {
  const actions = useActionsCreator(authActions);
  const user = useAppSelector(getUser);
  const role = useAppSelector(getUserRole);

  const initials = useMemo(() => extractInitials(user), [user]);

  return (
    <aside
      className={cn({
        "transform transition-transform ease-linear h-screen w-60 z-10 top-0 left-0 bg-white py-12":
          true,
        "-translate-x-full absolute": !isDropdownOpen,
        "block fixed": isDropdownOpen,
      })}
    >
      {isDropdownOpen && (
        <>
          <BackDrop />
          <button onClick={handleDropdownIsOpen} className="absolute top-5 -right-10">
            <AiOutlineClose className="w-6 fill-white h-6" />
          </button>
        </>
      )}

      <Avatar>{initials}</Avatar>

      {role !== UserRoles.GUEST ? (
        <button onClick={actions.logout} className="flex w-full justify-center p-3">
          <p className="text-xl">logout</p>
        </button>
      ) : (
        <Link className="p-3 flex flex-col items-center" href="/login">
          <p className="text-xl">Login</p>
        </Link>
      )}

      <div className="mt-10 overflow-auto">
        <NavMenu pages={pages} />
      </div>
    </aside>
  );
};
