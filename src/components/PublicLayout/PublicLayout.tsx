import { FC } from "react";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const PublicLayout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <p>public</p>
      {children}
    </div>
  );
};
