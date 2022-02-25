import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import up from "assets/images/dropUp.svg";
import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow1 } from "assets/style/GlobalStyled";

const SortTag = ({ path, text, ...rest }) => (
  <CustomLink to={path} {...rest}>
    <span>{text}</span>
    <span className="img" />
  </CustomLink>
);

const CustomLink = styled(Link)`
  ${getBackGroundBrandColor1}
  ${getWhiteColor1}
  ${getBoxShadow1}
  border-radius: 5px;
  position: relative;
  display: inline-block;
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
    transition: transform 0.35s ease-in;
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

export default SortTag;
