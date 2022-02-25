import { getWhiteColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow1, getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import React, { memo } from "react";
import styled, { css } from "styled-components";

const Button = ({ text, ...rest }) => <StyledButton {...rest}>{text}</StyledButton>;

const hover = () => css`
  transition: opacity 0.25s ease-in;
  &:hover {
    opacity: 0.8;
  }
`;

const StyledButton = styled.button`
  line-height: 2.2rem;
  border: 1px solid transparent;
  border-radius: 2px;
  cursor: pointer;
  ${getWhiteColor1}
  ${getBackGroundBrandColor1}
  ${getBoxShadow1}
  ${hover}

  ${({ ...rest }) => {
    const { dateSort, visible, height, padding, width, margin, background } = rest;

    if (dateSort) {
      return css`
        width: 70px;
        position: absolute;
        visibility: hidden;
        right: 0;
        opacity: 0;
        transition: opacity 0.5s, visibility 0.5s, transform 0.5s ease-in;
        transform: translateX(20px);
        ${visible &&
        css`
          opacity: 1;
          transform: translateX(0px);
          visibility: unset;
        `}
      `;
    }

    return css`
      background: ${background};
      width: ${width};
      margin: ${margin};
      padding: ${padding};
      height: ${height};
    `;
  }}
`;

export default memo(Button);
