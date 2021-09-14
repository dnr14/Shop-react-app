import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: rgba(231, 76, 60, 1);
  font-size: 1rem;
  margin: 5px 0;
  text-align: center;
`;

const Error = ({ error }) => {
  const errorRender = () => {
    return Object.keys(error.data.error.message).map((key) => (
      <StyledDiv>
        <span>{error.data.error.message[key]}</span>
      </StyledDiv>
    ));
  };

  return <>{typeof error.data === "string" ? <div>{error.data}</div> : errorRender()}</>;
};

export default Error;
