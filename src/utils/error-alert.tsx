import { Alert } from "@/components/ui/Alert";
import { toast } from "react-hot-toast";

export const errorAlert = (message = "Something went wrong") => {
  console.log("alert");
  toast.custom(() => <Alert message={message} />);
};
