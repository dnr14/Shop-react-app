import React, { memo } from "react";
import { Col, Row } from "style/Styled";
import styled from "styled-components";

const StyledBtn = styled.button`
  display: block;
  width: 100%;
  line-height: 2.2rem;
  background: rgba(46, 204, 113, 1);
  border: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 2px 2px 3px rgba(00, 00, 00, 0.5);
  cursor: pointer;
  color: #fff;

  &:active {
    background: #fff;
    border: 1px solid #333;
    color: #333;
  }
`;

const FormButton = () => {
  return (
    <Row>
      <Col>
        <StyledBtn type="submit">로 그 인</StyledBtn>
      </Col>
    </Row>
  );
};

export default memo(FormButton);
