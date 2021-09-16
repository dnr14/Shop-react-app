import React, { memo } from "react";
import { Col } from "style/Styled";
import { Row } from "style/Styled";

const addStyle = {
  margin: "10px 0px",
  textAlign: "center",
};

const labelSize = 4;
const inputSize = 8;

const MemberShipLayout = ({ children }) => {
  if (children instanceof Array) {
    return (
      <Row addStyle={addStyle}>
        <Col xs={labelSize} sm={labelSize} md={labelSize} lg={labelSize}>
          {children[0]}
        </Col>
        <Col xs={inputSize} sm={inputSize} md={inputSize} lg={inputSize}>
          {children[1]}
        </Col>
      </Row>
    );
  }

  return (
    <Row addStyle={addStyle}>
      <Col>{children}</Col>
    </Row>
  );
};

export default memo(MemberShipLayout);
