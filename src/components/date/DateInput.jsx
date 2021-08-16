import React from "react";
import ColTwoAndTen from "../ColTwoAndTen";
import Horus24Select from "./Horus24Select";
import Minutes60Select from "./Minutes60Select";

const DateInput = ({ state, text, handleChange }) => {
  return (
    <ColTwoAndTen display="flex" gap="10px">
      <div>{text}</div>
      <input type="date" name="date" value={state.dates.halfDate} onChange={handleChange} />
      <Horus24Select currentHours={state.dates.hours} handleChange={handleChange} />
      <Minutes60Select currentMinutes={state.dates.minutes} handleChange={handleChange} />
    </ColTwoAndTen>
  );
};

export default DateInput;
