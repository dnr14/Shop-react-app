import { maxWidthByBreakPointMobile } from "style/Styled";
import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;

  ${maxWidthByBreakPointMobile(css`
    input {
      width: 100%;
    }
  `)}

  & > span {
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    word-break: keep-all;
    text-align: center;
    ${maxWidthByBreakPointMobile(css`
      font-size: 1.3rem;
    `)}
  }

  input {
    border: none;
    box-shadow: 0px 0px 2px rgb(52 73 94);
    padding: 0 0.5rem;
    color: rgba(44, 62, 80, 1);
  }

  div {
    flex: 1;
    position: relative;
    select {
      width: 100%;
      border: none;
      height: 24px;
      background: transparent;
      outline: 0 none;
      padding: 0 5px;
      position: relative;
      box-shadow: 0px 0px 2px rgb(52 73 94);
      z-index: 3; // select가 위로 올라와야 함
      color: rgba(44, 62, 80, 1);

      option {
        background: rgba(46, 204, 113, 1);
        color: #fff;
        padding: 3px 0;
      }
    }

    & > span {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 35px;
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(46, 204, 113, 1);

      ${maxWidthByBreakPointMobile(css`
        width: 2.5rem;
      `)}
      & > img {
        transition: 0.3s;
      }
    }
  }
`;
