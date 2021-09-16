import Horus from "components/insert/Horus";
import Minutes from "components/insert/Minutes";
import React, { memo } from "react";
import { maxWidthByBreakPointMobile } from "style/Styled";
import styled, { css } from "styled-components";
import Error from "./Error";
import InsertTableLayout from "./InsertTableLayout";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  ${maxWidthByBreakPointMobile(css`
    input {
      width: 100%;
    }
    select {
      flex: 1;
    }
  `)}
`;

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

const DateSelect = memo(function DateSelect({
  error,
  selectedDate,
  hours,
  minutes,
  children,
  handleChange,
}) {
  return (
    <InsertTableLayout>
      <StyledDiv>{children}</StyledDiv>
      <StyledDiv>
        <input type="date" name="date" value={selectedDate} onChange={handleChange} />
        <Horus hours={hours} handleChange={handleChange} />
        <Minutes minutes={minutes} handleChange={handleChange} />
      </StyledDiv>
      <Error>{error}</Error>
    </InsertTableLayout>
  );
},
dateSelectAreEqual);

export default DateSelect;
