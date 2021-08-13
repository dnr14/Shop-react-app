import styled, { css } from "styled-components";
import { maxWidthByBreakPointTable } from "./Styled";

// ========= HEADER ===========
const flex_postion_center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const flex_postion_end = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const innerHeight = css`
  height: 100px;
`;

const StyledHeader = styled.header`
  background-color: rgba(46, 204, 113, 1);
  letter-spacing: 0.2rem;

  .header--title {
    ${flex_postion_center}
    ${innerHeight}
  }
  .nav--list {
    ${flex_postion_end}
    ${innerHeight}
    flex-wrap: wrap;
    padding: 0 1rem;
    .nav--item {
      text-align: center;
      a {
        padding: 15px 0.625rem;
        font-size: 1.2rem;
      }
    }

    ${maxWidthByBreakPointTable(css`
      height: auto;
      margin-bottom: 20px;
      padding: 0;
      .nav--item {
        width: 100%;
        a {
          width: 100%;
          &:hover {
            background-color: rgba(236, 240, 241, 1);
            color: rgba(44, 62, 80, 1);
            font-weight: bold;
          }
        }
      }
    `)}
  }
`;

export default StyledHeader;
