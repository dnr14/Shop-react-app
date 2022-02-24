import React from "react";
import { Col, Row } from "assets/style/GlobalStyled";

const InsertTableLayout = ({ children }) => {
  return (
    <>
      <Row addStyle={{ padding: "10px 0" }}>
        <Col xs={4} sm={2} md={2} lg={2}>
          {children[0]}
        </Col>
        <Col xs={8} sm={10} md={10} lg={10}>
          {children[1]}
        </Col>
      </Row>
      {children[2]}
    </>
  );
};

export default InsertTableLayout;
