import { maxWidthByBreakPointMobile } from "style/Styled";
import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 70%;
  margin: 0 auto;
  background-color: rgba(149, 165, 166, 0.5);

  ${maxWidthByBreakPointMobile(css`
    width: 85%;
  `)}
`;

export const LayOut = styled.div`
  padding: 1rem;

  & > div {
    &:first-child {
      padding: 10px 0;
    }
  }

  & > div {
    &:last-child {
      padding: 10px 0;
    }
  }
`;
