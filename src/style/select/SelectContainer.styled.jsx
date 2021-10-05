import { maxWidthByBreakPointSmaillMobile } from "style/Styled";
import styled, { css } from "styled-components";

export const StyledMain = styled.main`
  width: 90%;
  margin: 0 auto;

  ${maxWidthByBreakPointSmaillMobile(
    css`
      width: 100%;
    `
  )}

  section {
    padding: 1rem;
    box-shadow: 0px 0px 2px rgb(52 73 94);
  }
`;
