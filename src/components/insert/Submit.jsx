import { Col, Row } from "assets/style/GlobalStyled";
import React, { memo } from "react";
import { StyledButton } from "assets/style/insert/Submit.styled";

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
