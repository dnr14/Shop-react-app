import React from "react";

import { Row, Col } from "style/Styled";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px solid rgba(127, 140, 141, 0.8);
  ${({ vaildation }) =>
    vaildation &&
    css`
      border: 1px solid #c0392b;
    `}

  color: rgba(44, 62, 80, 1);
  &::placeholder {
    color: rgba(127, 140, 141, 0.5);
  }
`;

const addStyle = {
  margin: "10px 0",
};

const withInput = ({ ...rest }) => {
  return (
    <Row addStyle={addStyle}>
      <Col>
        <StyledInput {...rest} />
      </Col>
    </Row>
  );
};

export default withInput;
