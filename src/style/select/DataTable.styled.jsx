import styled from "styled-components";
import check from "images/check.svg";

export const Cotainer = styled.div`
  margin-top: 2rem;
  min-height: 25rem;
  word-break: keep-all;
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
      display: block;
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
    }

    :hover {
      background-color: rgba(46, 204, 113, 0.8);
      cursor: pointer;
      color: #fff;
    }
  }

  i {
    position: absolute;
    width: 1rem;
    height: 1rem;
    background-color: black;
    z-index: 1;
    padding: 1rem;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;
