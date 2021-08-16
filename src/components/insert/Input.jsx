import React from "react";
import { setThreeComma } from "util/NumberUtil";
import ColTwoAndTen from "components/ColTwoAndTen";

const Input = ({ text, handleChange, state }) => {
  return (
    <ColTwoAndTen display="flex">
      <div>{text}</div>
      <input type="text" name="price" value={state.price && setThreeComma(state.price)} onChange={handleChange} placeholder="0" />
      <span>원</span>
    </ColTwoAndTen>
  );
};

export default Input;
