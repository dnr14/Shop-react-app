import React, { memo } from "react";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  top: 200px;
  left: 0;
  /* ${({ width }) => css`
    width: ${width}px;
  `}; */
  width: 200px;
  margin: auto;
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 5px 5px 2px rgba(99, 110, 114, 1);
  visibility: hidden;
  transition: 0.5ms;
  text-align: center;

  ${({ visible }) =>
    visible &&
    css`
      visibility: unset;
    `}

  header {
    line-height: 2rem;
  }

  main {
    box-sizing: border-box;
    width: 100%;
    padding: 10px 10px;
    word-break: break-all;
  }

  span {
    color: rgba(231, 76, 60, 1);
    font-weight: bold;
    letter-spacing: 0.2rem;
    font-size: 0.8rem;
  }

  footer {
    width: 100%;
  }

  button {
    display: block;
    width: 80%;
    padding: 5px 0;
    margin: 10px auto;
    background-color: rgba(46, 204, 113, 1);
    border-radius: 20px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: 0.5ms;
    box-shadow: 0px 0px 2px rgba(99, 110, 114, 1);
    font-size: 1rem;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

const PopUp = ({ setVisible, visible, message }) => {
  return (
    <StyledDiv visible={visible}>
      <header>
        <h1>에러</h1>
      </header>
      <main>
        <span>{message}</span>
      </main>
      <footer>
        <button onClick={() => setVisible(false)}>팝업 닫기</button>
      </footer>
    </StyledDiv>
  );
};

export default memo(PopUp);
