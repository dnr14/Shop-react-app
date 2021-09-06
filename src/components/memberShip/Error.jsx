import React, { memo } from "react";
import { maxWidthByBreakPointTable } from "style/Styled";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import styled, { css } from "styled-components";

const addStyled = {
  margin: "10px 0px",
  textAlign: "center",
  color: "#e74c3c",
  fontWeight: "bold",
};
const StyledError = styled.div`
  ${maxWidthByBreakPointTable(css`
    font-size: 0.5rem;
  `)}
`;

const Error = memo(function Error({ children }) {
  return (
    <Row addStyle={addStyled}>
      <Col>
        <StyledError>{children}</StyledError>
      </Col>
    </Row>
  );
});

export default Error;
