import React from "react";
import { get60Minutes } from "util/DateUtil";

const Minutes60Select = ({ currentMinutes, handleChange }) => {
  return (
    <select value={currentMinutes} onChange={handleChange} name="minutes">
      {get60Minutes().map((v, idx) => (
        <option key={idx} value={v}>{`${String(v).padStart(2, "0")}분`}</option>
      ))}
    </select>
  );
};

export default Minutes60Select;
