import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  name: string;
  link: string;
}

export const NavItem: React.FC<NavItemProps> = ({ name, link }) => {
  const { asPath } = useRouter();

  const isCurrentPath = asPath === link;

  return (
    <li className="flex justify-center items-center mt-3">
      <Link
        className={`text-lg uppercase ${isCurrentPath ? "border-b-4 border-primary" : ""}`}
        href={link}
      >
        {name}
      </Link>
    </li>
  );
};
