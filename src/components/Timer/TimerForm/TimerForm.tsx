import { ChangeEvent, FormEvent, useState } from "react";
import { TimeForm } from "./styles";

interface Props {
  setTime: (value: number) => void;
  setStarted: (value: boolean) => void;
}

const TimerForm = (props: Props) => {
  const [timeInputValue, setTimeInputValue] = useState(0);

  const onChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeInputValue(Number(e.target.value));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    props.setTime(timeInputValue);
    if (timeInputValue != 0) {
      props.setStarted(true);
    }
  };

  return (
    <TimeForm onSubmit={onSubmit}>
      <input
        type="text"
        value={timeInputValue}
        onChange={onChangeTime}
        placeholder="Time"
      />
      <button type="submit">Start</button>
    </TimeForm>
  );
};

export default TimerForm;
