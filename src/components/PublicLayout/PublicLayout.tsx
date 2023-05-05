import { FC } from "react";
import { TopBar } from "./TopBar";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const PublicLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
};
