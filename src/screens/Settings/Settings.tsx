import { ImageFileLoader } from "@/components/ui/ImageFileLoader";
import { IUserSettings } from "@/interfaces/settings.interfaces";
import { SettingsForm } from "./SettingsForm";

interface ISettingsProps {
  initialValues: IUserSettings;
}

export const Settings: React.FC<ISettingsProps> = ({ initialValues }) => {
  return (
    <div className="container mx-auto px-4 mb-20">
      <h1 className="text-2xl font-bold text-center">Edit Info</h1>
      <div className="md:max-w-md md:mx-auto">
        <SettingsForm initialValues={initialValues} handleSubmit={console.log} />
        <div className="mt-2">
          <ImageFileLoader name="avatar" onChangeFile={console.log} />
        </div>
      </div>
    </div>
  );
};
