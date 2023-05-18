import { IAppPage } from "@/common/route.interfaces";
import { FC, useState } from "react";
import { SideBar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
  pages: IAppPage[];
}

export const Layout: FC<ILayoutProps> = ({ children, pages }) => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <>
      <TopBar toggleDrawer={toggleDrawer} />

      <main className="w-full h-screen md:flex">
        <SideBar handleDropdownIsOpen={toggleDrawer} isDropdownOpen={showDrawer} pages={pages} />

        <div className="w-full h-full p-2 overflow-auto bg-secondary">
          <div className="md:py-20">{children}</div>
        </div>
      </main>
    </>
  );
};
