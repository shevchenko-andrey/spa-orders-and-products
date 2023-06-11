import { IUserSettings } from "@/interfaces/settings.interfaces";
import { Settings } from "@/screens/Settings";

interface ISettingsPageProps {
  initialValues: IUserSettings;
}

const SettingsPage: React.FC<ISettingsPageProps> = ({ initialValues }) => {
  return <Settings initialValues={initialValues} />;
};

export default SettingsPage;

export const getServerSideProps = async () => {
  return {
    props: {
      initialValues: {
        firstName: "Andrew",
        lastName: "Shevchenko",
        password: "",
        email: "andrebro.shevchenko@gmail.com",
        avatar: null,
      },
    },
  };
};
