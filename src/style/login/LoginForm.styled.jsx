import { minWidthByBreakPointMobile } from "style/Styled";
import styled from "styled-components";

export const StyledMain = styled.main`
  margin-top: 3rem;
`;
export const Container = styled.section`
  margin: 0 auto;
  width: 80%;
  ${minWidthByBreakPointMobile({ width: "50%" })}
`;
