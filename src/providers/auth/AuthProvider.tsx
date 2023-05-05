import { PublicLayout } from "@/components/PublicLayout";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { FC, useMemo } from "react";

enum SimpleWrapperEndpoints {
  LOGIN = "/login",
  REGISTER = "/register",
}

const DynamicCheckRole = dynamic(() => import("./AuthCheckRole").then((mod) => mod.AuthCheckRole), {
  ssr: false,
});

export const AuthProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const { asPath } = useRouter();

  const isPrivate = useMemo(() => asPath.startsWith("/user"), [asPath]);

  const isSimpleWrapper = useMemo(
    () => asPath === SimpleWrapperEndpoints.REGISTER || asPath === SimpleWrapperEndpoints.LOGIN,
    [asPath]
  );

  if (isSimpleWrapper) {
    return <>{children}</>;
  }

  if (isPrivate) {
    return <DynamicCheckRole>{children}</DynamicCheckRole>;
  }

  return <PublicLayout>{children}</PublicLayout>;
};
