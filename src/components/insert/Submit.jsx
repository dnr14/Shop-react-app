import { Col, Row } from "style/Styled";
import React, { memo } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  ${css`
    ${({ customStyle }) => customStyle};
  `}
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(52, 73, 94, 1);
  border: 1px solid transparent;

  &:active {
    background-color: #fff;
    color: #000;
    border: 1px solid;
  }
`;

const Submit = memo(function Submit({ children, ...rest }) {
  return (
    <Row addStyle={{ margin: "10px 0" }}>
      <Col>
        <StyledButton type="submit" customStyle={rest}>
          {children}
        </StyledButton>
      </Col>
    </Row>
  );
});

export default Submit;
