import React, { memo } from "react";
import { setNumberThreeCommaDraw } from "utils/NumberUtil";
import Error from "./Error";
import InsertTableLayout from "./InsertTableLayout";

const PricetAreEqual = (prevProps, nextProps) => {
  if (prevProps.error !== nextProps.error) return false;
  if (nextProps.price === prevProps.price) return true;
};

const InsertInput = ({ error, children, price, handleChange }) => {
  return (
    <InsertTableLayout>
      <div>{children}</div>
      <div>
        <input
          type="text"
          name="price"
          value={price && setNumberThreeCommaDraw(price)}
          onChange={handleChange}
          placeholder="0원"
        />
        <span>원</span>
      </div>
      <Error>{error}</Error>
    </InsertTableLayout>
  );
};

export default memo(InsertInput, PricetAreEqual);
