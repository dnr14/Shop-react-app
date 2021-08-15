import React from "react";
import { get24Hour } from "util/DateUtil";

const Horus24Select = ({ currentHours, handleChange }) => {
  return (
    <select value={currentHours} onChange={handleChange} name="hours">
      {get24Hour().map((v, idx) => (
        <option key={idx} value={v}>{`${String(v).padStart(2, "0")}시`}</option>
      ))}
    </select>
  );
};

export default Horus24Select;
