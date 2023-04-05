import { DateFormats } from "@/common/enums";
import { format } from "date-fns";
import { useState, useEffect, FC } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Clock: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center">
      <AiOutlineClockCircle className="fill-primary mr-2" />
      <time className="block h-full w-12">{format(time, DateFormats.CLOCK_FORMAT)}</time>
    </div>
  );
};
