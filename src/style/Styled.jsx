import styled, { createGlobalStyle, css } from "styled-components";
const BREAK_POINT_SMAILL_MOBILE = 450;
const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const MOBILE_FONT_SIZE = css`
  font-size: 10px;
`;
const TABLE_FONT_SIZE = css`
  font-size: 13px;
`;
// 450px
export const maxWidthByBreakPointSmaillMobile = (props) => css`
  @media only screen and (max-width: ${BREAK_POINT_SMAILL_MOBILE}px) {
    ${props}
  }
`;
//768px
export const maxWidthByBreakPointMobile = (props) => css`
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    ${props}
  }
`;
//992px
export const maxWidthByBreakPointTable = (props) => css`
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    ${props}
  }
`;

export const minWidthByBreakPointSmaillMobile = (props) => css`
  @media only screen and (min-width: ${BREAK_POINT_SMAILL_MOBILE}px) {
    ${props}
  }
`;

export const minWidthByBreakPointMobile = (props) => css`
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
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
      font-family: 'Noto Sans KR', sans-serif;
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
      //테이블 폰트
      ${maxWidthByBreakPointTable(TABLE_FONT_SIZE)}
      // 모바일 폰트
      ${maxWidthByBreakPointMobile(MOBILE_FONT_SIZE)}
      min-width:280px;
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
      -webkit-user-drag:none;
    }

    h1{
      font-size: inherit;
    }
    button{
      display: inline-block;
      font-family: inherit;
      vertical-align: middle;
      cursor: pointer ;
      white-space: nowrap;
      text-decoration: none;
      background: transparent; 
      outline: 0;
      border: none;
    }

    select::-ms-expand { 
      display: none;
    }
    select {
      -o-appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
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
export const StyledMaxWidth = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
