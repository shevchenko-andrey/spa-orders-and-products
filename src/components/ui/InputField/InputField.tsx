import { useField } from "formik";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  title,
  name,
  className,
  type = "text",
  ...fieldProps
}) => {
  const [field, meta] = useField({ ...fieldProps, name });

  return (
    <div className="mt-2">
      <label className="block" htmlFor={name}>
        {title}
      </label>
      <input
        {...field}
        {...fieldProps}
        className={`rounded-full border py-1 px-4 outline-none focus:border-purple-500 ${className}`}
        type={type}
        name={name}
        id={name}
      />
      {meta.touched && meta.error && <div className="text-red-500 text-sm mt-1">{meta.error}</div>}
    </div>
  );
};
