import React, { memo } from "react";
import styled from "styled-components";

export const StyledDiv = styled.div`
  color: #e74c3c;
  font-weight: bold;
  margin: 0px 0px 10px 0;
`;

const Error = memo(function Error({ children }) {
  return <>{children && <StyledDiv>{children}</StyledDiv>}</>;
});

export default Error;
