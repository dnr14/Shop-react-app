import { memo } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

export const maxWidthByBreakPointMobile = (props) => css`
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    ${props}
  }
`;

export const maxWidthByBreakPointTable = (props) => css`
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    ${props}
  }
`;

const GlobalStyled = createGlobalStyle`

   *{
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
    }

    body{
      margin: 0; 
    }

    html{
      min-width: 320px;

      ${maxWidthByBreakPointTable(css`
        font-size: 13px;
      `)}

      ${maxWidthByBreakPointMobile(css`
        font-size: 12px;
      `)}

    }

    ol, ul {
      list-style: none;
      margin:0px;
      padding:0px;
    }
    
    input:focus,
    select:focus{
      outline: none;
    }

    a{
      display: inline-block;
      text-decoration: none;
      color: rgba(236, 240, 241, 1);
    }

    img{
      display: inline-block;
    }

    h1{
      font-size: inherit;
    }

`;

export default GlobalStyled;

// ===== row =====
export const StyledRow = memo(styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`);

// ===== col =====
export const StyledCol = memo(styled.div`
  float: left;
  width: ${({ xs }) => (xs ? `${calcWidthPercent(xs)}%` : `100%`)};
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: ${({ sm }) => sm && `${calcWidthPercent(sm)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: ${({ md }) => md && `${calcWidthPercent(md)}%`};
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: ${({ lg }) => lg && `${calcWidthPercent(lg)}%`};
  }
`);
StyledCol.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
};
const calcWidthPercent = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

// ========= MaxWidthContainer ===========
export const MaxWidthContainer = memo(styled.div`
  max-width: 1200px;
  margin: 0 auto;
`);
