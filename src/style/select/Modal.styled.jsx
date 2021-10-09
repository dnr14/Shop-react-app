import styled, { css } from "styled-components";
import { minWidthByBreakPointMobile } from "style/Styled";
import close from "images/close.svg";

const PERSONAL_COLOR = "rgba(46, 204, 113, 1)";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(127, 140, 141, 0.5);
  z-index: 0;
  opacity: 0;
  transition: opacity 0.5s, z-index 0.5s ease-in;

  ${({ visible }) => {
    return (
      visible &&
      css`
        z-index: 2;
        opacity: 1;
      `
    );
  }}

  & > form {
    transition: transform 1s ease-in;
    transform: translateY(100px);
    ${({ visible }) => {
      return (
        visible &&
        css`
          transform: translateY(0px);
          z-index: 2;
          opacity: 1;
        `
      );
    }}

    ${minWidthByBreakPointMobile(
      css`
        max-width: 500px;
      `
    )}
    width: 70%;
    padding: 1.5rem;
    background-color: #fff;
    border-radius: 20px;

    & > header {
      display: flex;
      position: relative;
      justify-content: center;
      color: ${PERSONAL_COLOR};
      font-size: 2rem;
      & > span {
        position: absolute;
        display: inline-block;
        box-sizing: content-box;
        width: 1.5rem;
        height: 1.5rem;
        padding: 1rem;
        background-color: beige;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: url(${close});
        background-repeat: no-repeat;
        background-size: cover;
        cursor: pointer;
        filter: invert(56%) sepia(56%) saturate(521%) hue-rotate(93deg) brightness(103%)
          contrast(96%);
      }
    }

    & > main > form {
      margin-bottom: 1rem;
    }

    & > footer > div {
      display: flex;
      & > button {
        flex: 1;
        margin: 1rem 0;
        padding: 1rem;
        color: #fff;
        border-radius: 10px;
        letter-spacing: 5px;
        background-color: ${PERSONAL_COLOR};
        transition: box-shadow 0.35s ease-in;
        box-shadow: 0;
      }
      & > button:hover {
        box-shadow: 0 0 20px rgba(127, 140, 141, 0.5);
      }
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & + & {
    margin-top: 1rem;
  }

  & > div {
    position: relative;
    & > span {
      font-weight: bold;
      font-size: 1.2rem;
      letter-spacing: 0.8rem;
      color: ${PERSONAL_COLOR};
    }
    & > span ~ span {
      color: red;
      letter-spacing: 0;
      font-size: 1rem;
    }

    & > input,
    & > select {
      width: 100%;
      cursor: pointer;
      padding: 0.5rem;
      letter-spacing: 1px;
      border: 1px solid rgba(149, 165, 166, 0.8);
      font-weight: 600;
    }

    & > select > option {
      background: ${PERSONAL_COLOR};
      color: #fff;
      padding: 1rem 0;
      border: 1px solid transparent;
    }

    & > select + span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      cursor: pointer;
      right: 0;
      top: 0;
      bottom: 0;
      width: 3rem;
      background-color: ${PERSONAL_COLOR};
      & > img {
        transform: rotate(-180deg);
        transition: transform 0.5s ease-in;
      }
    }
    & > select:hover + span > img {
      transform: rotate(0deg);
    }
  }
`;
