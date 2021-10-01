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

  ${({ radius }) =>
    radius?.length === 0 &&
    css`
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `}
`;

export const LayOut = styled.div`
  padding: 1rem;
`;

export const Empty = styled.div`
  padding: 1rem;
  text-align: center;
  letter-spacing: 0.3rem;
  font-size: 1.1rem;
  font-weight: bold;
`;
