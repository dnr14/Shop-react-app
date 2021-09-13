import React, { memo } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: rgba(231, 76, 60, 1);
  font-size: 1rem;
  text-align: center;
`;

const Error = memo(function memo({ errorText }) {
  return (
    <>
      {Object.keys(errorText).map((key) => (
        <StyledDiv>
          <span>{errorText[key]}</span>
        </StyledDiv>
      ))}
    </>
  );
});

export default Error;
