import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import up from "images/dropUp.svg";

export const StyledButton = styled.button`
  position: absolute;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: rgba(46, 204, 113, 0.8);
  color: #fff;
  margin-bottom: 1rem;
  box-shadow: 3px 3px 5px rgb(127 140 141 / 50%);
  bottom: -3rem;

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s, visibility 0.5s, transform 0.5s ease-in;
  transform: translateX(-20px);

  ${({ visible }) =>
    visible &&
    css`
      transform: translateX(0px);
      opacity: 1;
      visibility: unset;
    `}

  :hover {
    background-color: rgba(46, 204, 113, 1);
  }
`;

export const StyledDiv = styled.div`
  margin-top: 1rem;
  position: relative;

  & > div {
    &:nth-child(3) {
      & > div {
        &:nth-child(1) {
          & > div {
            justify-content: center;
          }
        }
      }
    }
  }
`;
export const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  word-break: keep-all;
  padding: 0 0.5rem;
  height: 1.5rem;
  & > span {
    color: rgba(46, 204, 113, 1);
    font-weight: bold;
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  background-color: rgba(46, 204, 113, 1);
  border-radius: 5px;
  display: inline-block;
  box-shadow: 0px 0px 3px rgb(127 140 141 / 50%);
  width: 1.5rem;
  height: 1.5rem;
  background-size: cover;
  background-image: url(${up});
  transition: transform 0.35s;

  ${({ position }) => {
    return position === "asc"
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(180deg);
        `;
  }}
`;
