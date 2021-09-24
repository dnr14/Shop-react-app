import React, { memo } from "react";
import { Col, Row } from "style/Styled";
import { StyledTitle } from "style/common/Title.styled";

const Title = ({ children }) => {
  return (
    <Row>
      <Col>
        <StyledTitle>{children}</StyledTitle>
      </Col>
    </Row>
  );
};

export default memo(Title);
