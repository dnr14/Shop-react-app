import React from "react";
import { getZeroToFiftyNineMinutes } from "utils/DateUtil";

const Minutes = ({ minutes, handleChange }) => {
  return (
    <select value={minutes} onChange={handleChange} name="minutes">
      {getZeroToFiftyNineMinutes().map((minute, idx) => (
        <option key={idx} value={minute}>{`${minute}분`}</option>
      ))}
    </select>
  );
};

export default Minutes;
