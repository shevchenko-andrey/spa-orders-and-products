import { FC } from "react";
import { NavItem } from "./NavItem/NavItem";

interface IPage {
  name: string;
  link: string;
}

interface INavMenuProps {
  pages: IPage[];
}

export const NavMenu: FC<INavMenuProps> = ({ pages }) => {
  return (
    <nav className="text-center">
      <ul>
        {pages.map(({ name, link }, index) => (
          <NavItem key={index} name={name} link={link} />
        ))}
      </ul>
    </nav>
  );
};
