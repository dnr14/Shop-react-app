import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "style/Styled";
import styled from "styled-components";

const activeStyle = {
  fontWeight: "bold",
  backgroundColor: "#000",
  color: "#fff",
  padding: "5px",
};

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 5px;
  margin: 0 5px;
  border-radius: 3px;
  &:visited {
    color: #000;
  }
`;

const InsertLinks = ({ path }) => {
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

export default memo(InsertLinks);
