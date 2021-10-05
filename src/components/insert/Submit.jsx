import { Col, Row } from "style/Styled";
import React, { memo } from "react";
import { StyledButton } from "style/insert/Submit.styled";

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
