import { useActionsCreator } from "@/hooks";
import { authActions } from "@/store/auth";
import { CiLogout } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { InfoPanel } from "../InfoPanel";
import { Logo } from "./Logo";

export const TopBar: React.FC = ({}) => {
  const actions = useActionsCreator(authActions);

  return (
    <header className="flex shadow-lg relative">
      <div className="flex justify-between m-2 items-center md:flex w-full">
        <button className="p-4 md:hidden">
          <GiHamburgerMenu className="w-10 h-10" />
        </button>
        <div className="hidden sm:block">
          <Logo />
        </div>

        <div className="hidden mr-4 md:block">
          <InfoPanel />
        </div>

        <button onClick={actions.logout} className="flex items-end md:items-center p-3">
          <CiLogout className="w-10 h-10" />
          <p className="hidden text-xl ml-2 md:block">logout</p>
        </button>
      </div>
    </header>
  );
};
