import { forwardRef, useState, FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IDateConstructor {
  startDate: Date;
}

/* eslint-disable no-eval */
const DataPicker: FC<IDateConstructor> = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const ExampleCustomInput = forwardRef<HTMLInputElement>((props, ref) => (
    <button className={`example-custom-input`} onClick={props.onClick} ref={ref}>
      {props.value}
    </button>
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};

export default DataPicker;
