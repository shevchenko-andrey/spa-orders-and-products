import { useRouter } from "next/router";

export const Redirect = ({ to }: { to: string }) => {
  const router = useRouter();
  router.replace(to);
  return null;
};
