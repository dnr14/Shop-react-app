import React from "react";
import { StyledCol } from "./Styled";

const Col = ({ children, ...rest }) => {
  return <StyledCol {...rest}>{children}</StyledCol>;
};

export default Col;
