import React, { memo } from "react";
import SelectBox from "components/common/SelectBox";
import InnerWrapper from "./common/InnerWrapper";

const categorySelectAreEqual = (prevProps, nextProps) => {
  if (prevProps.error !== nextProps.error) return false;
  if (prevProps.category === nextProps.category) return true;
};

const CategorySelect = ({ category, error, handleChange }) => {
  return (
    <>
      <InnerWrapper>
        <span>카테고리</span>
      </InnerWrapper>
      <InnerWrapper>
        <SelectBox name="category" value={category} handleChange={handleChange}>
          <option value="">선택</option>
          <option value="식비">식비</option>
          <option value="교통비">교통비</option>
          <option value="공과금">공과금</option>
          <option value="기타">기타</option>
        </SelectBox>
      </InnerWrapper>
    </>
  );
};

export default memo(CategorySelect, categorySelectAreEqual);
