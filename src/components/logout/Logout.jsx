import React, { memo } from "react";
import { Link } from "react-router-dom";
import { StyledMaxWidth } from "style/Styled";
import styled, { css } from "styled-components";
import { maxWidthByBreakPointMobile, maxWidthByBreakPointTable } from "style/Styled";

const StyledMain = styled.main`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;

  ${maxWidthByBreakPointTable(
    css`
      font-size: 1rem;
    `
  )}

  ${maxWidthByBreakPointMobile(
    css`
      font-size: 0.5rem;
    `
  )}
`;

const StyledLink = styled(Link)`
  margin: 15px 0;
  padding: 10px;
  display: block;
  background-color: #2ecc71;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: rgba(46, 204, 113, 0.5);
  }
`;

const StyledSection = styled.section`
  margin-top: 50px;
`;

const Logout = () => {
  return (
    <StyledMaxWidth>
      <StyledMain>
        <StyledSection>
          <div>로그아웃이 되었습니다.</div>
          <StyledLink to="/">흠으로</StyledLink>
          <StyledLink to="/login">로그인</StyledLink>
        </StyledSection>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default memo(Logout);
