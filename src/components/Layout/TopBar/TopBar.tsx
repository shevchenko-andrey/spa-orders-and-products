import { Logo } from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { InfoPanel } from "../InfoPanel";

export const TopBar: React.FC = ({}) => {
  return (
    <header className="flex justify-end shadow-lg">
      <div className="flex justify-between items-center md:flex w-full md:w-9/12 md:ml-auto">
        <div>
          <Logo />
        </div>
        <button className="p-4 md:hidden">
          <GiHamburgerMenu className="w-10 h-10" />
        </button>
        <div className="hidden mr-4 md:block">
          <InfoPanel />
        </div>
      </div>
    </header>
  );
};
