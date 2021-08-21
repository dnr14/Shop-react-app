import React, { memo } from "react";
import { setNumberThreeCommaDraw } from "util/NumberUtil";
import Error from "./Error";
import InsertTableLayout from "./InsertTableLayout";

const PricetAreEqual = (prevProps, nextProps) => {
  if (prevProps.error !== nextProps.error) return false;
  if (nextProps.price === prevProps.price) return true;
};

const InsertInput = memo(function InsertInput({ error, children, price, handleChange }) {
  return (
    <InsertTableLayout>
      <div>{children}</div>
      <div>
        <input type="text" name="price" value={price && setNumberThreeCommaDraw(price)} onChange={handleChange} placeholder="0" />
        <span>원</span>
      </div>
      <Error>{error}</Error>
    </InsertTableLayout>
  );
}, PricetAreEqual);

export default InsertInput;
