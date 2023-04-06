import { FC } from "react";
import { Avatar } from "./Avatar";
import { NavMenu } from "./NavMenu";
import { TopBar } from "./TopBar";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

const pages = [
  { name: "Income", link: "/income" },
  { name: "Groups", link: "/groups" },
  { name: "Products", link: "/products" },
  { name: "Users", link: "/users" },
  { name: "Settings", link: "/settings" },
];

export const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <TopBar />

      <main className="w-full h-full md:flex">
        <div className="w-3/12 md:block hidden py-12">
          <Avatar image="/avatar.jpeg" />

          <div className="mt-10 overflow-auto">
            <NavMenu pages={pages} />
          </div>
        </div>

        <div className="md:w-9/12 w-full h-full p-2 overflow-auto bg-secondary">
          <div className="md:py-20 ">{children}</div>
        </div>
      </main>
    </div>
  );
};
