import styled, { css } from "styled-components";
import {} from "style/Styled";
import { maxWidthByBreakPointSmaillMobile } from "style/Styled";

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.2rem;
  box-shadow: 0px 0px 2px rgba(52, 73, 94, 1);
  padding: 1rem 0.5rem;
  word-break: keep-all;
  color: rgba(46, 204, 113, 1);
  border-radius: 5px;

  ${maxWidthByBreakPointSmaillMobile(css`
    padding: 1rem 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
  `)}
`;
