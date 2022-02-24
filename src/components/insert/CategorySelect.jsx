import React, { memo } from "react";
import Error from "./Error";
import InsertTableLayout from "./InsertTableLayout";
import down from "assets/images/dropDown.svg";
import { StyledDiv } from "assets/style/insert/DateSelect.styled";

const categorySelectAreEqual = (prevProps, nextProps) => {
  if (prevProps.error !== nextProps.error) return false;
  if (prevProps.category === nextProps.category) return true;
};

const CategorySelect = memo(function CategorySelect({
  error,
  category,
  handleChange,
  children,
}) {
  return (
    <InsertTableLayout>
      <StyledDiv>{children}</StyledDiv>
      <StyledDiv>
        <div>
          <select name="category" value={category} onChange={handleChange}>
            <option value="">선택</option>
            <option value="식비">식비</option>
            <option value="교통비">교통비</option>
            <option value="공과금">공과금</option>
            <option value="기타">기타</option>
          </select>
          <span>
            <img src={down} alt="down" />
          </span>
        </div>
      </StyledDiv>
      <Error>{error}</Error>
    </InsertTableLayout>
  );
},
categorySelectAreEqual);

export default CategorySelect;
