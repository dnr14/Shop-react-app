import { getFlex } from "assets/style/GlobalStyled";
import { getBoxShadow2 } from "assets/style/GlobalStyled";
import { getRedColor1 } from "assets/style/GlobalStyled";
import { getBackGroundWhiteColor1 } from "assets/style/GlobalStyled";
import React, { memo, useCallback } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";

const Modal = ({ setVisible, visible, message }) => {
  const handleClick = useCallback(() => setVisible(false), [setVisible]);
  if (!visible) return null;
  return (
    <ModalWrapper visible={visible}>
      <header>
        <h1>에러</h1>
      </header>
      <main>
        <p>{message}</p>
      </main>
      <footer>
        <Button text="닫기" onClick={handleClick} margin="10px 0" width="80%" />
      </footer>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.main`
  position: absolute;
  right: 0;
  left: 0;
  top: 200px;
  width: 250px;
  margin: auto;
  color: #000;
  overflow: hidden;
  border-radius: 5px;
  visibility: hidden;
  text-align: center;

  ${getFlex("space-between", "center", "column")}
  ${getBoxShadow2}
  ${getBackGroundWhiteColor1}

  ${({ visible }) =>
    visible &&
    css`
      visibility: unset;
    `}

  main {
    width: 100%;
    font-size: 1.2rem;
    padding: 10px 20px;
    word-break: break-all;
    & > p {
      letter-spacing: 0.1rem;
      font-size: 0.8rem;
      ${getRedColor1}
    }
  }

  footer {
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
    ${getBoxShadow2}
  }
`;

export default memo(Modal);
