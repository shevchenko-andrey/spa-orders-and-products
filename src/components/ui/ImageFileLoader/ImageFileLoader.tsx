import { useRef } from "react";

interface ImageFileLoaderProps {
  name: string;
  onChangeFile: (file: FormData) => void;
}

export const ImageFileLoader: React.FC<ImageFileLoaderProps> = ({
  onChangeFile,
  name = "file",
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = () => {
    if (formRef.current === null) {
      return;
    }

    const formData = new FormData(formRef.current);
    onChangeFile(formData);
  };

  return (
    <div>
      <form>
        <label
          htmlFor="name"
          className="block border border-dashed border-secondary-dark pointer bg-white p-4"
        >
          <input
            className="absolute opacity-0"
            name={name}
            id={name}
            type="file"
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
          />
          Upload image
        </label>
      </form>
    </div>
  );
};
