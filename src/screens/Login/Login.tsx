import { RequestStatus } from "@/common/enums";
import { Redirect } from "@/components/Redirect";
import { useActionsCreator, useAppSelector } from "@/hooks";
import { authActions, getAccessToken, getStatus } from "@/store/auth";
import Link from "next/link";
import { LoginForm } from "./LoginForm";

export const Login: React.FC = ({}) => {
  const status = useAppSelector(getStatus);
  const token = useAppSelector(getAccessToken);
  const actions = useActionsCreator(authActions);

  return (
    <div className="px-5 flex min-h-screen flex-col justify-center items-center">
      <LoginForm handleSubmit={actions.login} />
      <Link className="underline block mt-2 text-secondary-dark" href="/register">
        create a new account
      </Link>
      {status === RequestStatus.SUCCESS && token && <Redirect to="/user/income" />}
    </div>
  );
};
