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
  background-color: rgba(149, 165, 166, 0.5);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s linear;

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
  width: 500px;
  border-radius: 20px;
  box-shadow: 0px 5px 2px rgba(149, 165, 166, 1);
  transform: translateY(100px);
  transition: transform 0.8s linear;

  ${({ visible }) =>
    visible &&
    css`
      transform: translateY(0px);
    `}

  form {
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
      section {
        div {
          font-weight: bold;
          padding: 0.5rem;
          &:first-child,
          &:nth-child(2) {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
          }

          &:nth-child(2) {
            input {
              flex: 1;
              padding-left: 0.5rem;
              padding-top: 0.3rem;
              padding-bottom: 0.3rem;
              box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
              border: none;
              border-top: 1px solid;
              border-left: 1px solid;
              border-radius: 5px;
              letter-spacing: 0.2rem;
              font-size: 1rem;

              &::-webkit-input-placeholder {
                color: rgb(187, 187, 187);
                opacity: 1;
                transition: 0.5s;
              }
              &:focus::-webkit-input-placeholder {
                opacity: 0;
              }
            }
          }

          &:last-child {
            textarea {
              width: 100%;
              padding: 1rem;
              resize: none;
              min-height: 200px;
              box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
              border: none;
              border-top: 1px solid;
              border-left: 1px solid;
              border-radius: 10px;
              letter-spacing: 0.2rem;
              font-size: 1rem;

              &::-webkit-input-placeholder {
                color: rgb(187, 187, 187);
                opacity: 1;
                transition: 0.5s;
              }
              &:focus::-webkit-input-placeholder {
                opacity: 0;
              }

              &:focus {
                outline: none;
              }
            }
          }
        }
      }
    }

    footer {
      width: 100%;
      div {
        padding-bottom: 1rem;
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
  }
`;

export const Cancel = styled.div`
  position: relative;
  height: 15px;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  div {
    position: absolute;
    background-color: transparent;
    cursor: pointer;
    padding: 1rem;
    top: 0;

    &:hover {
      transform-origin: 50% 0%;
      animation-name: shake;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.5ms;
    }

    span {
      display: inline-block;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      border-top: 1px solid rgba(46, 204, 113, 1);
      top: 50%;
      width: 100%;
      height: 2px;
      background-color: rgba(46, 204, 113, 1);
      border-radius: 20px;

      &:first-child {
        transform: rotate(135deg) translateX(0%);
      }
      &:last-child {
        transform: rotate(45deg) translateX(0%);
      }
    }

    @keyframes shake {
      0% {
        transform: rotate(0deg);
      }
      10% {
        transform: rotate(30deg);
      }
      20% {
        transform: rotate(-30deg);
      }
      30% {
        transform: rotate(20deg);
      }
      40% {
        transform: rotate(-20deg);
      }
      50% {
        transform: rotate(10deg);
      }
      60% {
        transform: rotate(-10deg);
      }
      70% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
