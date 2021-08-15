import React from "react";
import ColTwoAndTen from "../ColTwoAndTen";

const Category = ({ state, handleChange }) => {
  return (
    <ColTwoAndTen display="flex">
      <div>지출 카테고리</div>
      <select name="category" value={state.category} onChange={handleChange}>
        <option value="">선택</option>
        <option value="식비">식비</option>
        <option value="교통비">교통비</option>
        <option value="공과금">공과금</option>
        <option value="기타">기타</option>
      </select>
    </ColTwoAndTen>
  );
};

export default Category;
