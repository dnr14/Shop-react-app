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

export const minWidthByBreakPointTable = (props) => css`
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    ${props}
  }
`;

const GlobalStyled = createGlobalStyle`

   *{
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
    }

    body{
      margin: 0; 
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      ::-webkit-scrollbar{
      width: 0;
      height: auto;
    }
    ::-webkit-scrollbar-thumb{
      background-color: rgba(46,204,113,1);
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track{
        background-color: #fff;
      }

    }

    html{

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

    a {
        text-decoration: none;
        outline: none
    }

    img{
      display: inline-block;
    }

    h1{
      font-size: inherit;
    }

`;

export default GlobalStyled;

// ===== row ======
export const Row = styled.div`
  ${({ addStyle }) =>
    addStyle &&
    css`
      ${addStyle}
    `}

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

// ===== col =====
export const Col = styled.div`
  float: left;

  ${({ addStyle }) =>
    addStyle &&
    css`
      ${addStyle}
    `}

  ${({ display }) =>
    display &&
    css`
      display: ${display};
      align-items: center;
    `}

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}

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
`;
Col.defaultProps = {
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
export const StyledMaxWidth = memo(styled.div`
  max-width: 1200px;
  margin: 0 auto;
`);
