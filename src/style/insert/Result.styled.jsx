import styled, { css } from "styled-components";
import { maxWidthByBreakPointSmaillMobile } from "style/Styled";
import { maxWidthByBreakPointMobile } from "style/Styled";

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 1rem;
  ${maxWidthByBreakPointMobile(css`
    width: 100%;
  `)}

  h1 {
    text-align: center;
    font-size: 1.5rem;
    letter-spacing: 0.09rem;
  }

  & > div {
    display: flex;
    gap: 1rem;
    ${maxWidthByBreakPointSmaillMobile(
      css`
        flex-direction: column;
      `
    )}

    & > span {
      &:first-child {
        color: rgba(46, 204, 113, 1);
        width: 150px;
        font-size: 1.2rem;
        font-weight: bold;
        ${maxWidthByBreakPointMobile(css`
          width: 100px;
        `)}
      }
    }
  }
  div + div {
    padding-top: 1rem;
  }
`;
