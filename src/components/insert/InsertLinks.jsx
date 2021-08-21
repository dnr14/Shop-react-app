import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "style/Styled";
import styled from "styled-components";

const activeStyle = {
  fontWeight: "bold",
  backgroundColor: "#000",
  color: "#fff",
  padding: "5px",
};

const StyledAnchor = styled(NavLink)`
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
        <StyledAnchor to={`${path}/expenditure`} activeStyle={activeStyle}>
          지출
        </StyledAnchor>
        <StyledAnchor to={`${path}/income`} activeStyle={activeStyle}>
          수입
        </StyledAnchor>
      </Col>
    </Row>
  );
};

export default InsertLinks;
