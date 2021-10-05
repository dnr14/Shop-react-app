import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import up from "images/dropUp.svg";

export const StyledDiv = styled.div`
  margin-top: 1rem;
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
