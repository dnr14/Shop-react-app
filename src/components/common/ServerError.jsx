import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: rgba(231, 76, 60, 1);
  font-size: 1rem;
  margin: 5px 0;
  text-align: center;
`;

//공통으로 쓰고 싶다면 개선해야된다.

const ServerError = ({ error }) => {
  const result = typeof error.data === "string" ? error.data : error.data.error.message;

  const errorRender = () => {
    return Object.keys(result).map((key) => (
      <StyledDiv>
        <span>{result[key]}</span>
      </StyledDiv>
    ));
  };

  return <>{typeof result === "string" ? <StyledDiv>{result}</StyledDiv> : errorRender()}</>;
};

export default ServerError;
