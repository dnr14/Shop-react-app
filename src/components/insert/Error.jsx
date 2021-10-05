import React, { memo } from "react";
import { StyledDiv } from "style/insert/Error.styled";

const Error = memo(function Error({ children }) {
  return <>{children && <StyledDiv>{children}</StyledDiv>}</>;
});

export default Error;
