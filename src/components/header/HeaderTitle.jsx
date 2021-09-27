import React, { memo } from "react";
import { Link } from "react-router-dom";
import { maxWidthByBreakPointTable, Col } from "style/Styled";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  a {
    color: #fff;
    padding: 15px 0.625rem;
    font-weight: bold;
    font-size: 1.5rem;
    word-break: keep-all;
    text-align: center;
  }

  ${maxWidthByBreakPointTable(css`
    justify-content: space-between;
    padding: 0 15px;
  `)}
`;

const HeaderTitle = memo(function HeaderTitle({ ...rest }) {
  return (
    <Col {...rest}>
      <StyledDiv>
        <Link to="/">똑똑 가계부</Link>
      </StyledDiv>
    </Col>
  );
});

export default HeaderTitle;
