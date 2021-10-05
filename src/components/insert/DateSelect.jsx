import React, { memo } from "react";
import Error from "./Error";
import InsertTableLayout from "./InsertTableLayout";
import { StyledDiv } from "style/insert/DateSelect.styled";
import SelectBox from "./SelectBox";

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
        <SelectBox
          hours={hours}
          minutes={minutes}
          selectedDate={selectedDate}
          handleChange={handleChange}
        />
      </StyledDiv>
      <Error>{error}</Error>
    </InsertTableLayout>
  );
},
dateSelectAreEqual);

export default DateSelect;
