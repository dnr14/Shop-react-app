import { maxWidthByBreakPointSmaillMobile } from "style/Styled";
import styled from "styled-components";

export const Container = styled.main`
  width: 50%;
  margin: 0 auto;
  margin-top: 1.5rem;

  ${maxWidthByBreakPointSmaillMobile({ width: "80%" })}
`;
