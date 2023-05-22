import { RequestStatus, UserRoles } from "@/common/enums";
import { Redirect } from "@/components/Redirect";
import { useActionsCreator, useAppSelector } from "@/hooks";
import { authActions, getIsLogged, getStatus, getUserRole } from "@/store/auth";
import Link from "next/link";
import { LoginForm } from "./LoginForm";

export const Login: React.FC = ({}) => {
  const status = useAppSelector(getStatus);
  const isLogged = useAppSelector(getIsLogged);
  const role = useAppSelector(getUserRole);
  const actions = useActionsCreator(authActions);

  return (
    <div className="px-5 flex min-h-screen flex-col justify-center items-center">
      <LoginForm handleSubmit={actions.login} />
      <Link className="underline block mt-2 text-secondary-dark" href="/register">
        create a new account
      </Link>
      {status === RequestStatus.SUCCESS && role === UserRoles.ADMIN && <Redirect to="/orders" />}
      {status === RequestStatus.SUCCESS && isLogged && <Redirect to="/orders" />}
    </div>
  );
};
