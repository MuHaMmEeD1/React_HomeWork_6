import { SetStateAction, useEffect, useRef, useState } from "react";
import TimerForm from "./TimerForm/TimerForm";
import { TimerDiv } from "./styles";
import TimerUl from "./TimerUl/TimerUl";

const Timer = () => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(time);
  const [started, setStarted] = useState(false);
  const [oldTimes, setOldTimes] = useState<number[]>([]);
  const intervalId = useRef<number>();

  const onClickStarted = () => {
    setStarted(!started);
    if (started) {
      setOldTimes([...oldTimes, time]);
    }
  };

  const onClickReset = () => {
    setTime(0);
    clearInterval(intervalId.current);
    setStarted(false);
    setOldTimes([]);
  };

  useEffect(() => {
    timeRef.current = time;
    if (started) {
      intervalId.current = setInterval(() => {
        if (timeRef.current === 1) {
          clearInterval(intervalId.current);
          console.log("clear");
          setStarted(false);
          setOldTimes([]);
        }

        setTime((timeRef.current -= 1));
        console.log("ok", time);
      }, 1000);
    } else {
      clearInterval(intervalId.current);
      console.log("clear");
    }
  }, [started]);

  return (
    <TimerDiv>
      {time == 0 ? (
        <TimerForm setTime={setTime} setStarted={setStarted} />
      ) : (
        <h2>{time} PM</h2>
      )}
      {time == 0 ? (
        <></>
      ) : started ? (
        <button onClick={onClickStarted}>Stop</button>
      ) : (
        <button onClick={onClickStarted}>Start</button>
      )}
      <button onClick={onClickReset}>Reset</button>
      <TimerUl oldTimes={oldTimes} />
    </TimerDiv>
  );
};

export default Timer;
