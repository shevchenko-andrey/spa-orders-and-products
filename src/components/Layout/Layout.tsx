import { IAppPage } from "@/common/route.interfaces";
import { FC, useState } from "react";
import { Drawer } from "./Drawer";
import { SideBar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { BackDrop } from "../ui/BackDrop/BackDrop";
import { Modal } from "../ui/Modal/Modal";

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
        <BackDrop>
          <Modal isOpen={true} handleClose={() => console.log("click")}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ex?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam corporis porro
              totam molestiae, sint maiores cupiditate necessitatibus sunt illum doloribus, officiis
              consequatur repellendus tempore minima et perferendis eveniet quibusdam nisi delectus?
              Ipsam esse architecto dolores minima et ducimus impedit maiores a, quo animi iste
              harum soluta cumque exercitationem. Commodi, cumque.
            </p>
          </Modal>
        </BackDrop>
      </main>
    </div>
  );
};
