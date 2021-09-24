import styled from "styled-components";
import { maxWidthByBreakPointSmaillMobile } from "../Styled";
import { minWidthByBreakPointSmaillMobile } from "../Styled";

export const StyledSection = styled.section`
  margin: 0 auto;
  width: 80%;

  //450px부터
  ${minWidthByBreakPointSmaillMobile({ width: "50%" })}
`;

export const LayOut = styled.div`
  padding: 1rem 0.5rem;
  box-sizing: border-box;
  word-break: break-word;
  ${maxWidthByBreakPointSmaillMobile({ padding: "0.8rem 0.5rem" })}
`;

export const UpdateButton = styled.button`
  width: 90%;
  padding: 1rem 5%;
  border: none;
  color: #fff;
  background-color: #2ecc71;
  cursor: pointer;
  border-radius: 20px;
  height: 2rem;
  box-sizing: content-box;
  letter-spacing: 0.3rem;
  font-size: 1.3rem;
  margin: 0.7rem 0;

  &:hover {
    box-shadow: 2px 2px 2px rgba(44, 62, 80, 0.5);
    font-weight: bold;
  }
`;

export const Container = styled.main`
  margin-top: 2.5rem;
`;
