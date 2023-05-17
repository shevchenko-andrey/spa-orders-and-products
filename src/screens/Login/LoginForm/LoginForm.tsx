import { RegExpEmail } from "@/common/regular-expressions";
import { InputField } from "@/components/ui/InputField";
import { IUserCredentials } from "@/interfaces";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

interface LoginProps {
  handleSubmit: (values: IUserCredentials) => void;
}

const initialValues: IUserCredentials = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().matches(RegExpEmail, "invalid email").required(),
  password: Yup.string().min(8).max(20).required(),
});

export const LoginForm: React.FC<LoginProps> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit(values) {
      handleSubmit(values);
    },
    validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <form className="block" onSubmit={formik.handleSubmit}>
        <p className="text-4xl text-center mb-4">Login</p>

        <InputField title="Email" type="email" name={"email"} />

        <InputField title="Password" type="password" name="password" />

        <div className="text-center mt-3">
          <button
            className="border mt-2 p-2 text-white w-full outline-none bg-purple-500 rounded-2xl focus:border-purple-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </FormikProvider>
  );
};
