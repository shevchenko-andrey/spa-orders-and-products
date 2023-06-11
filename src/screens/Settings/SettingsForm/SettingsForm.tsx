import { RegExpEmail } from "@/common/regular-expressions";
import { InputField } from "@/components/ui/InputField";
import { IUserSettings } from "@/interfaces/settings.interfaces";
import { FormikContext, useFormik } from "formik";
import * as Yup from "yup";

const settingsFields = [
  { name: "firstName", title: "First Name" },
  { name: "lastName", title: "Last Name" },
  { name: "email", title: "Email", type: "email" },
  { name: "password", title: "Password", type: "password" },
];

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().matches(RegExpEmail, "Please enter a valid email address").required(),
  password: Yup.string().min(8).required(),
});

interface ISettingsFormProps {
  initialValues: IUserSettings;
  handleSubmit: (values: FormData) => void;
}

export const SettingsForm: React.FC<ISettingsFormProps> = ({ initialValues, handleSubmit }) => {
  const formik = useFormik<IUserSettings>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <FormikContext.Provider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        {settingsFields.map((field) => (
          <InputField className="min-w-full" key={field.name} {...field} />
        ))}

        <div className="flex justify-end mt-5">
          <button
            className="py-2 px-4 text-white bg-primary rounded-xl hover:bg-primary-dark"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </FormikContext.Provider>
  );
};
