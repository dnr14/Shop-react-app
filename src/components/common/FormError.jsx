import React, { memo } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  margin: 5px 0;
  color: #c0392b;
`;

const FormError = memo(({ vaildation }) => {
  return <StyledDiv>{vaildation.message}</StyledDiv>;
});

export default FormError;
