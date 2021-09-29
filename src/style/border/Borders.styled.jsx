import { maxWidthByBreakPointMobile } from "style/Styled";
import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 70%;
  margin: 0 auto;
  background-color: rgba(149, 165, 166, 0.3);
  box-shadow: 1px 1px 1px rgba(00, 00, 00, 0.1);
  border-left: 1px solid rgba(00, 00, 00, 0.1);
  ${maxWidthByBreakPointMobile(css`
    width: 85%;
  `)}
`;

export const LayOut = styled.div`
  padding: 1rem;
`;
