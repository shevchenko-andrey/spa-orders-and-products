import { FC } from "react";
import { Avatar } from "./Avatar";
import { NavMenu } from "./NavMenu";
import { TopBar } from "./TopBar";

interface IAppPages {
  name: string;
  link: string;
}

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
  pages: IAppPages[];
}

export const Layout: FC<ILayoutProps> = ({ children, pages }) => {
  return (
    <div className="h-screen overflow-hidden">
      <TopBar />

      <main className="w-full h-full md:flex">
        <div className="md:block w-60 hidden py-12">
          <Avatar image="/avatar.jpeg" />

          <div className="mt-10 overflow-auto">
            <NavMenu pages={pages} />
          </div>
        </div>

        <div className="w-full h-full p-2 overflow-auto bg-secondary">
          <div className="md:py-20">{children}</div>
        </div>
      </main>
    </div>
  );
};
