import { TimeUl } from "./styles";

interface Props {
  oldTimes: number[];
}

const TimerUl = (props: Props) => {
  return (
    <TimeUl>
      {props.oldTimes.map((e, i) => {
        return (
          <li key={i}>
            <p>{e}</p>
          </li>
        );
      })}
    </TimeUl>
  );
};

export default TimerUl;
