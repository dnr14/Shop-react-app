import React from "react";
import { getOneToTwentyForeHoure } from "utils/DateUtil";

const HorusZeroToTwentyFourSelect = ({ hours, handleChange }) => {
  return (
    <select value={hours} onChange={handleChange} name="hours">
      {getOneToTwentyForeHoure().map((houre, idx) => (
        <option key={idx} value={houre}>{`${String(houre).padStart(2, "0")}시`}</option>
      ))}
    </select>
  );
};

export default HorusZeroToTwentyFourSelect;
