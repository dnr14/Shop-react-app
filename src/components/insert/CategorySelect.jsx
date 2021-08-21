import React, { memo } from "react";
import styled from "styled-components";
import Error from "./Error";
import InsertTableLayout from "./InsertTableLayout";

const StyledDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const categorySelectAreEqual = (prevProps, nextProps) => {
  if (prevProps.error !== nextProps.error) return false;
  if (prevProps.category === nextProps.category) return true;
};

const CategorySelect = memo(function CategorySelect({ error, category, handleChange, children }) {
  return (
    <InsertTableLayout>
      <StyledDiv>{children}</StyledDiv>
      <StyledDiv>
        <select name="category" value={category} onChange={handleChange}>
          <option value="">선택</option>
          <option value="식비">식비</option>
          <option value="교통비">교통비</option>
          <option value="공과금">공과금</option>
          <option value="기타">기타</option>
        </select>
      </StyledDiv>
      <Error>{error}</Error>
    </InsertTableLayout>
  );
}, categorySelectAreEqual);

export default CategorySelect;
