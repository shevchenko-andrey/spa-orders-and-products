import { DateFormats } from "@/common/enums";
import { format } from "date-fns";
import { useMemo } from "react";
import { Clock } from "./Clock";
import { SessionCounter } from "./SessionCounter";

export const InfoPanel: React.FC = ({}) => {
  const today = useMemo(() => format(new Date(), DateFormats.FULL_DATE), []);

  return (
    <div className="flex items-center">
      <div className="mr-5">
        <p>Today</p>
        <span>{today}</span>
      </div>
      <div className="mr-5">
        <SessionCounter />
      </div>
      <Clock />
    </div>
  );
};
