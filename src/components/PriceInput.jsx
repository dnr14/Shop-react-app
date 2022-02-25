import React from "react";
import { getNumberThreeCommaDraw } from "utils/NumberUtil";
import InnerWrapper from "./common/InnerWrapper";
import Input from "./common/Input";

const PriceInput = ({ text, price, handleChange }) => {
  return (
    <>
      <InnerWrapper>
        <span>{text}</span>
      </InnerWrapper>
      <InnerWrapper>
        <Input
          type="text"
          name="price"
          value={price && getNumberThreeCommaDraw(price)}
          onChange={handleChange}
          placeholder="0원"
        />
      </InnerWrapper>
    </>
  );
};

export default PriceInput;
