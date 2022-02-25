import React, { memo } from "react";
import styled from "styled-components";
import {
  getOneToTwentyForeHoure,
  getZeroToFiftyNineMinutes,
} from "utils/DateUtil";
import { getGrayColor1, getBoxShadow3 } from "assets/style/GlobalStyled";
import SelectBox from "components/common/SelectBox";
import InnerWrapper from "./common/InnerWrapper";

const dateSelectAreEqual = (prevProps, nextProps) => {
  if (prevProps.error !== nextProps.error) return false;
  if (
    nextProps.selectedDate === prevProps.selectedDate &&
    nextProps.hours === prevProps.hours &&
    nextProps.minutes === prevProps.minutes
  ) {
    return true;
  }
};

const DateSelect = ({ selectedDate, hours, minutes, handleChange }) => {
  return (
    <>
      <InnerWrapper>
        <span>날짜</span>
      </InnerWrapper>
      <InnerWrapper>
        <DateBox
          type="date"
          name="date"
          value={selectedDate}
          onChange={handleChange}
        />
      </InnerWrapper>
      <InnerWrapper>
        <SelectBox name="hours" value={hours} handleChange={handleChange}>
          {getOneToTwentyForeHoure().map((houre, idx) => (
            <option key={idx} value={houre}>{`${houre}시`}</option>
          ))}
        </SelectBox>
      </InnerWrapper>
      <InnerWrapper>
        <SelectBox
          name="minutes"
          value={String(minutes).padStart("2", "0")}
          handleChange={handleChange}
        >
          {getZeroToFiftyNineMinutes().map((minute, idx) => (
            <option key={idx} value={minute}>{`${minute}분`}</option>
          ))}
        </SelectBox>
      </InnerWrapper>
    </>
  );
};

// export const InnerWrapper = styled.div`
//   ${getFlex("center", "center")}
//   flex-wrap: wrap;
//   gap: 0.7rem;
//   width: 150px;
//   height: 50px;

//   & + & {
//     flex: 1;
//     position: relative;
//     margin-left: 5px;
//   }
// `;

const DateBox = styled.input`
  flex: 1;
  border: none;
  padding: 0 0.5rem;
  ${getBoxShadow3}
  ${getGrayColor1}
  cursor: pointer;
  height: 100%;
`;

export default memo(DateSelect, dateSelectAreEqual);
