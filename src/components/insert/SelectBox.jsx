import React from "react";
import { getOneToTwentyForeHoure, getZeroToFiftyNineMinutes } from "utils/DateUtil";
import down from "images/dropDown.svg";

const SelectBox = ({ hours, minutes, selectedDate, handleChange }) => {
  return (
    <>
      <input type="date" name="date" value={selectedDate} onChange={handleChange} />
      <div>
        <select value={hours} name="hours" onChange={handleChange}>
          {getOneToTwentyForeHoure().map((houre, idx) => (
            <option key={idx} value={houre}>{`${houre}시`}</option>
          ))}
        </select>
        <span>
          <img src={down} alt="down" />
        </span>
      </div>
      <div>
        <select
          value={String(minutes).padStart("2", "0")}
          onChange={handleChange}
          name="minutes"
        >
          {getZeroToFiftyNineMinutes().map((minute, idx) => (
            <option key={idx} value={minute}>{`${minute}분`}</option>
          ))}
        </select>
        <span>
          <img src={down} alt="down" />
        </span>
      </div>
    </>
  );
};

export default SelectBox;
