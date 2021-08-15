import React from "react";
import { StyledRow } from "./Styled";

const Row = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>;
};

export default Row;
