import { useField } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface InputFieldProps {
  name: string;
  title: string;
  className?: string;
  type?: HTMLInputTypeAttribute;
  accept?: string;
}

export const ProductInputField: React.FC<InputFieldProps> = ({
  title,
  name,
  className,
  type = "text",
  ...fieldProps
}) => {
  const [field, meta] = useField({ ...fieldProps, name });

  return (
    <div className="mt-2 ">
      <label className="block text-green-800 mb-2 text-xl" htmlFor={name}>
        {title}
      </label>
      <input
        {...field}
        {...fieldProps}
        className={`rounded-full border py-1 px-4 outline-none focus:border-purple-500 w-[600px] text-lime-700 ${className}`}
        type={type}
        name={name}
        id={name}
      />
      {meta.touched && meta.error && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
    </div>
  );
};
