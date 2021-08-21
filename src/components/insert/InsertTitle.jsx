import React from "react";
import { Col, Row } from "style/Styled";
import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
`;

const InsertTitle = () => {
  return (
    <Row>
      <Col>
        <StyledH1>입출을 가계부에 등록해보세요.</StyledH1>
      </Col>
    </Row>
  );
};

export default InsertTitle;
