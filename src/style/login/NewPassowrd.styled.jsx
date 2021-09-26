import { minWidthByBreakPointTable } from "style/Styled";
import { maxWidthByBreakPointMobile } from "style/Styled";
import { minWidthByBreakPointMobile } from "style/Styled";
import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;

  ${minWidthByBreakPointMobile({ width: "70%" })}
  ${minWidthByBreakPointTable({ width: "60%" })}
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  box-shadow: 0px 0px 2px rgb(52 73 94);
  border: 1px solid rgba(99, 110, 114, 1);
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0.5rem 0;

    ${maxWidthByBreakPointMobile(
      css`
        flex-direction: column;
        gap: 10px;
      `
    )}

    input {
      width: 90%;
      background: transparent;
      border: transparent;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      padding: 0.5rem 0 0.5rem 1rem;

      ${maxWidthByBreakPointMobile(css`
        padding-left: 0;
        text-align: center;
        text-overflow: ellipsis;
      `)}
    }
    span {
      width: 20%;
      letter-spacing: 0.2rem;
    }

    &:nth-child(3) {
      input {
        background: none;
        border: 1px solid rgba(99, 110, 114, 0.3);
        border-radius: 8px;
        margin-left: 10px;
      }
    }
  }

  button {
    padding: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    letter-spacing: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: #fff;
    border-radius: 5px;
    border: transparent;
    box-shadow: 0px 0px 2px rgb(52 73 94);
    background-color: rgba(46, 204, 113, 1);
    transition: 0.5s background-color;
    text-align: center;
    &:hover {
      background-color: rgba(46, 204, 113, 0.8);
    }
  }

  .success {
    justify-content: center;
    button {
      letter-spacing: 0;
    }
  }
`;
