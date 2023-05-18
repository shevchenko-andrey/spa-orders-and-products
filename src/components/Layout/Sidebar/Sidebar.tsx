import { UserRoles } from "@/common/enums";
import { IAppPage } from "@/common/route.interfaces";
import { useActionsCreator, useAppSelector } from "@/hooks";
import { authActions, getUser, getUserRole } from "@/store/auth";
import { extractInitials } from "@/utils/extract-initials";
import Link from "next/link";
import { FC, useMemo } from "react";
import { Avatar } from "../Avatar";
import { NavMenu } from "../NavMenu";

interface ISideBarProps {
  pages: IAppPage[];
  isDropdownOpen: boolean;
  handleDropdownIsOpen: () => void;
}

export const SideBar: FC<ISideBarProps> = ({ pages }) => {
  const actions = useActionsCreator(authActions);
  const user = useAppSelector(getUser);
  const role = useAppSelector(getUserRole);

  const initials = useMemo(() => extractInitials(user), [user]);

  return (
    <aside className="transform transition-transform hidden md:block text-center py-12 w-60">
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
