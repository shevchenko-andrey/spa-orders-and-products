import { useStateSelector } from "@/hooks";
import { useRouter } from "next/router";
import { FC } from "react";
import { PrivateLayout } from "../../components/PrivateLayout";

export const AuthCheckRole: FC<{ children: JSX.Element }> = ({ children }) => {
  const isLoggedIn = useStateSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();

  if (!isLoggedIn) {
    router.push("/");
  }

  return <PrivateLayout>{children}</PrivateLayout>;
};
