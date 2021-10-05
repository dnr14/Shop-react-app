import React, { memo } from "react";
import { getNumberThreeCommaDraw } from "utils/NumberUtil";
import Error from "./Error";
import InsertTableLayout from "./InsertTableLayout";
import { StyledInput } from "style/insert/PriceInput.styled";
import { StyledDiv } from "style/insert/DateSelect.styled";

const PricetAreEqual = (prevProps, nextProps) => {
  if (prevProps.error !== nextProps.error) return false;
  if (nextProps.price === prevProps.price) return true;
};

const PriceInput = ({ error, children, price, handleChange }) => {
  return (
    <InsertTableLayout>
      <StyledDiv>{children}</StyledDiv>
      <StyledInput
        type="text"
        name="price"
        value={price && getNumberThreeCommaDraw(price)}
        onChange={handleChange}
        placeholder="0원"
      />
      <Error>{error}</Error>
    </InsertTableLayout>
  );
};

export default memo(PriceInput, PricetAreEqual);
