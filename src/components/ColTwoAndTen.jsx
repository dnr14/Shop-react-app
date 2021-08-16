import React from "react";
import { Col, Row } from "components/style/Styled";

const ColTwoAndTen = ({ children, ...rest }) => {
  const firstColSize = 2;
  const secondColSize = 10;
  return (
    <Row customStyle={{ height: "30px", margin: "10px 0" }}>
      <Col xs={4} sm={firstColSize} md={firstColSize} lg={firstColSize} {...rest}>
        {children[0]}
      </Col>
      <Col xs={8} sm={secondColSize} md={secondColSize} lg={secondColSize} {...rest}>
        {children[1]}
        {children[2]}
        {children[3]}
      </Col>
    </Row>
  );
};

export default ColTwoAndTen;
