import React from "react";
import { getZeroToFiftyNineMinutes } from "util/DateUtil";

const Minutes59Select = ({ minutes, handleChange }) => {
  return (
    <select value={minutes} onChange={handleChange} name="minutes">
      {getZeroToFiftyNineMinutes().map((minutes, idx) => (
        <option key={idx} value={minutes}>{`${String(minutes).padStart(2, "0")}분`}</option>
      ))}
    </select>
  );
};

export default Minutes59Select;
