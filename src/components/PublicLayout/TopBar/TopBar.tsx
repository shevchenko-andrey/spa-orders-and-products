import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { Logo } from "./Logo";

export const TopBar: React.FC = ({}) => {
  return (
    <header className="flex justify-end shadow-lg">
      <div className="flex justify-between items-center md:flex w-full md:w-9/12 md:ml-auto">
        <Link href="/">
          <Logo />
        </Link>

        <Link
          href="/login"
          className="flex justify-center items-center text-white px-4 py-2 bg-green rounded-full mr-4"
        >
          <BiUser width={16} hanging={16} className="mr-2" />
          <span className="pl-2">Login</span>
        </Link>
      </div>
    </header>
  );
};
