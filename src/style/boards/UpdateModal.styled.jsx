import styled, { css } from "styled-components";

export const Fiexd = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  background-color: rgba(149, 165, 166, 0.5);
  z-index: -1;
  opacity: 0;
  transition: all 0.5s linear;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      z-index: 1;
    `}
`;

export const Mobal = styled.div`
  padding: 1rem;
  height: auto;
  background: #fff;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0px 5px 2px rgba(149, 165, 166, 1);
  gap: 10px;
  transition: all 0.5s linear;
  transform: translateY(100px);

  ${({ visible }) =>
    visible &&
    css`
      transform: translateY(0px);
    `}

  form {
    width: 100%;
    header {
      text-align: center;
      width: 100%;
      h1 {
        background-color: rgba(46, 204, 113, 1);
        padding: 1rem;
        color: #fff;
        border-radius: 5px;
      }
    }

    main {
      width: 100%;
      textarea {
        width: 100%;
        padding: 1rem;
        resize: none;
        min-height: 200px;

        &:focus {
          outline: none;
        }
      }
    }

    footer {
      width: 100%;
      button {
        border-radius: 20px;
        background-color: rgba(46, 204, 113, 0.8);
        border: transparent;
        box-shadow: 0px 2px 2px rgba(149, 165, 166, 1);
        cursor: pointer;
        display: block;
        padding: 1rem;
        width: 80%;
        color: #fff;
        margin: 0 auto;
        transition: 1ms background-color;
        &:hover {
          background-color: rgba(46, 204, 113, 1);
        }
      }
    }
  }
`;
