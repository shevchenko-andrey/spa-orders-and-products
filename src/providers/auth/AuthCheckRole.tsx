import { UserRoles } from "@/common/enums";
import { useAppSelector } from "@/hooks";
import { getUserRole } from "@/store/auth";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";
import { Layout } from "../../components/Layout";

// TODO: fix routing
const privatePages = [
  { name: "Income", link: "/income", roles: [UserRoles.USER] },
  { name: "Orders", link: "/orders", roles: [UserRoles.USER] },
  { name: "Groups", link: "/groups", roles: [UserRoles.USER] },
  { name: "Products", link: "/products/edit", roles: [UserRoles.USER] },
  { name: "Settings", link: "/settings", roles: [UserRoles.USER, UserRoles.USER] },
];

export const AuthCheckRole: FC<{ children: JSX.Element }> = ({ children }) => {
  const role = useAppSelector(getUserRole);
  const router = useRouter();

  if (role === UserRoles.GUEST) {
    router.push("/");
  }

  const pages = useMemo(() => {
    return privatePages.filter((page) => page.roles.includes(role));
  }, [role]);

  return <Layout pages={pages}>{children}</Layout>;
};
