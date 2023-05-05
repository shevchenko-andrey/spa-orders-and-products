import { RequestStatus } from "@/common/enums";
import { Redirect } from "@/components/Redirect";
import { useActionsCreator, useAppSelector } from "@/hooks";
import { authActions, getStatus } from "@/store/auth";
import Link from "next/link";
import { RegisterForm } from "./RegisterForm";

export const Register: React.FC = () => {
  const status = useAppSelector(getStatus);
  const actions = useActionsCreator(authActions);

  return (
    <div className="px-5 flex flex-col min-h-screen justify-center items-center">
      <RegisterForm handleSubmit={actions.register} />
      <Link className="underline block mt-2 text-secondary-dark" href="/login">
        back to login
      </Link>
      {status === RequestStatus.SUCCESS && <Redirect to="/login" />}
    </div>
  );
};
