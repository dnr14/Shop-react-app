import React, { memo } from "react";
import { Col, Row } from "assets/style/GlobalStyled";
import { activeStyle, StyledNavLink } from "assets/style/insert/Links.styled";

const Links = ({ path }) => {
  return (
    <Row>
      <Col>
        <StyledNavLink to={`${path}/expenditure`} activeStyle={activeStyle}>
          지출
        </StyledNavLink>
        <StyledNavLink to={`${path}/income`} activeStyle={activeStyle}>
          수입
        </StyledNavLink>
      </Col>
    </Row>
  );
};

export default memo(Links);
