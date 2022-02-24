import { getWhiteColor1 } from "assets/style/GlobalStyled";
import {
  getBoxShadow1,
  getBackGroundBrandColor1,
} from "assets/style/GlobalStyled";
import React, { memo } from "react";
import styled, { css } from "styled-components";

const Button = ({ text, ...rest }) => (
  <StyledButton {...rest}>{text}</StyledButton>
);

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
    const { height, padding, width, margin, background } = rest;

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
