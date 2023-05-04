import { PublicLayout } from "@/components/PublicLayout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";

enum PublicEndpoints {
  MAIN = "/",
  LOGIN = "/login",
  REGISTER = "/register",
}

const DynamicCheckRole = dynamic(() => import("./AuthCheckRole").then((mod) => mod.AuthCheckRole), {
  ssr: false,
});

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const { asPath } = useRouter();

  const isPublic = useMemo(() => Object.values<string>(PublicEndpoints).includes(asPath), [asPath]);

  if (isPublic) return <PublicLayout>{children}</PublicLayout>;

  return <DynamicCheckRole>{children}</DynamicCheckRole>;
};
