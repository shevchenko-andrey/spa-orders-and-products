import { useAppSelector } from "@/hooks";
import { getAccessToken } from "@/store/auth";
import { useRouter } from "next/router";
import { FC } from "react";
import { PrivateLayout } from "../../components/PrivateLayout";

export const AuthCheckRole: FC<{ children: JSX.Element }> = ({ children }) => {
  const isLogged = useAppSelector(getAccessToken);

  const router = useRouter();

  if (!isLogged) {
    router.replace("/login");
  }

  return <PrivateLayout>{children}</PrivateLayout>;
};
