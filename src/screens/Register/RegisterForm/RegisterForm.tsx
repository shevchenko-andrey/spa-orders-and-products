import { RegExpEmail } from "@/common/regular-expressions";
import { InputField } from "@/components/ui/InputField";
import { RegisterRequest } from "@/interfaces";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";

interface LoginProps {
  handleSubmit: (values: RegisterRequest) => void;
}

const initialValues: RegisterRequest & { confirmPassword: string } = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().matches(RegExpEmail, "Please enter a valid email address").required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "password is not match")
    .required("confirm your password"),
});

const registerFields = [
  { name: "firstName", title: "First Name" },
  { name: "lastName", title: "Last Name" },
  { name: "email", title: "Email", type: "email" },
  { name: "password", title: "Password", type: "password" },
  { name: "confirmPassword", title: "Confirm Password", type: "password" },
];

export const RegisterForm: React.FC<LoginProps> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit(values, { resetForm }) {
      handleSubmit(values);
      resetForm();
    },
    validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <form className="block" onSubmit={formik.handleSubmit}>
        <h2 className="text-4xl text-center mb-4">Register</h2>

        <div className="mt-2 first:mt-0">
          {registerFields.map(({ name, title, type }, index) => (
            <InputField
              key={index}
              className="first:mt-0 mt-2"
              name={name}
              title={title}
              type={type}
            />
          ))}
        </div>

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
