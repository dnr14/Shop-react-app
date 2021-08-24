import React, { memo } from "react";
import { Col, Row } from "style/Styled";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
`;

const Title = ({ children }) => {
  return (
    <Row>
      <Col>
        <StyledH1>{children}</StyledH1>
      </Col>
    </Row>
  );
};

export default memo(Title);
