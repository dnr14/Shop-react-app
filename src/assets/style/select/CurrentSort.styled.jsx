import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import up from "assets/images/dropUp.svg";

export const StyledDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  min-height: 2.5rem;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  background-color: rgba(46, 204, 113, 1);
  border-radius: 5px;
  display: inline-block;
  box-shadow: 3px 3px 5px rgb(127 140 141 / 50%);
  position: relative;
  & > span {
    display: inline-block;
    padding: 0.5rem 0.8rem;
    padding-right: 30px;
  }
  .img {
    position: absolute;
    padding: 0;
    width: 25px;
    height: 25px;
    right: 3px;
    top: 0;
    bottom: 0;
    margin: auto;
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
  }
`;
