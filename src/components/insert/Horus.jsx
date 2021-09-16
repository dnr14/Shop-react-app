import React from "react";
import { getOneToTwentyForeHoure } from "utils/DateUtil";

const Horus = ({ hours, handleChange }) => {
  return (
    <select value={hours} onChange={handleChange} name="hours">
      {getOneToTwentyForeHoure().map((houre, idx) => (
        <option key={idx} value={houre}>{`${houre}시`}</option>
      ))}
    </select>
  );
};

export default Horus;
