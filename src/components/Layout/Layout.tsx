import { FC } from "react";
import { Avatar } from "./Avatar";
import { NavMenu } from "./NavMenu";

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
    <>
      <main className="w-full sm:flex h-screen">
        <div className="w-3/12 sm:block hidden py-12">
          <Avatar image="/avatar.jpeg" />

          <div className="mt-10">
            <NavMenu pages={pages} />
          </div>
        </div>

        <div className="md:w-9/12 sm:w-full h-screen bg-secondary">{children}</div>
      </main>
    </>
  );
};
