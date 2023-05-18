import { Layout } from "@/components/Layout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";

enum SimpleWrapperEndpoints {
  LOGIN = "/login",
  REGISTER = "/register",
}

const publicPages = [
  { name: "Home", link: "/" },
  { name: "Computers", link: "/computers" },
  { name: "Tablets", link: "/tablets" },
  { name: "Laptops", link: "/laptops" },
  { name: "Phones", link: "/phones" },
];

const DynamicCheckRole = dynamic(() => import("./AuthCheckRole").then((mod) => mod.AuthCheckRole), {
  ssr: false,
});

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const { asPath } = useRouter();

  const isSimpleWrapper = useMemo(
    () => asPath === SimpleWrapperEndpoints.REGISTER || asPath === SimpleWrapperEndpoints.LOGIN,
    [asPath]
  );

  const isPublic = useMemo(() => publicPages.some((page) => page.link === asPath), [asPath]);

  if (isPublic) {
    return <Layout pages={publicPages}>{children}</Layout>;
  }

  if (isSimpleWrapper) {
    return <>{children}</>;
  }

  return <DynamicCheckRole>{children}</DynamicCheckRole>;
};
