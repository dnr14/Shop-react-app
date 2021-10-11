import styled, { css } from "styled-components";
import check from "images/check.svg";
import update from "images/upgrade.svg";

export const Cotainer = styled.div`
  margin-top: 2rem;
  min-height: 25rem;
  word-break: keep-all;

  opacity: 0;
  transition: opacity 0.5s ease-in;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `}

  span {
    display: flex;
    width: 100%;
    letter-spacing: 0.05rem;
    text-align: center;
    word-break: break-all;
    justify-content: center;
    align-items: center;
  }

  & > div {
    & > label {
      transition: background-color 0.35s;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.5rem;

      & > div {
        position: relative;
        &:nth-child(1) {
          & > span {
            input[type="checkbox"] {
              display: none;
            }

            label {
              display: inline-block;
              cursor: pointer;
              height: 1.2rem;
              width: 1.2rem;
              border: 1px solid rgba(46, 204, 113, 0.8);
              background-color: #fff;
              transition: 0.35s;
            }

            input[type="checkbox"]:checked + label {
              background-image: url(${check});
              background-size: cover;
            }
          }
        }
      }

      &:nth-child(2) {
        & > span {
          background-color: rgb(46, 204, 113);
          border-radius: 5px;
          color: #fff;
          font-weight: bold;
        }
      }

      &::after {
        clear: both;
        content: "";
        display: block;
      }
      :hover {
        background-color: rgba(46, 204, 113, 0.8);
        cursor: pointer;
        color: #fff;
      }
    }
    & > div {
      height: 0;
      background-color: black;
      color: #fff;
      overflow: hidden;
      transition-property: height, overflow;
      transition-duration: 0.35s, 5s;

      ${({ click }) => {
        return (
          click &&
          css`
            overflow: auto;
            height: 2rem;
          `
        );
      }}
    }
  }

  span + span {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: transparent;
    z-index: 1;
    padding: 1rem;
    top: 0;
    bottom: 0;
    right: -0.5rem;
    margin: auto;
    background-image: url(${update});
    background-size: cover;
    border-radius: 50%;
    transition: border 0.35s;

    &:hover {
      transform-origin: 50% 0%;
      animation-name: shake;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-delay: 0.5ms;
      filter: invert(94%) sepia(0%) saturate(7413%) hue-rotate(224deg) brightness(112%)
        contrast(102%);
    }

    @keyframes shake {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
      90% {
        transform: translateY(2px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }
`;
