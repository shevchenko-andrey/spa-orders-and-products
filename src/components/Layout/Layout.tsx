import { IAppPage } from "@/common/route.interfaces";
import { FC, useState } from "react";
import { Drawer } from "./Drawer";
import { SideBar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
  pages: IAppPage[];
}

export const Layout: FC<ILayoutProps> = ({ children, pages }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <TopBar toggleDrawer={toggleDrawer} />

      <Drawer handleDropdownIsOpen={toggleDrawer} isDropdownOpen={isDropdownOpen} pages={pages} />

      <main className="w-full h-screen md:flex">
        <SideBar pages={pages} />

        <div className="w-full h-full p-2 overflow-auto bg-secondary">
          <div className="md:py-20">{children}</div>
        </div>
      </main>
    </div>
  );
};
