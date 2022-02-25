import React, { memo } from "react";
import styled from "styled-components";
import { getBrandColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow2 } from "assets/style/GlobalStyled";
import { smallMobile } from "assets/style/GlobalStyled";
import { css } from "styled-components";

const Title = ({ text, ...rest }) => {
  return <StyledTitle {...rest}>{text}</StyledTitle>;
};

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  word-break: keep-all;
  border-radius: 5px;
  font-weight: 900;

  ${getBoxShadow2}
  ${getBrandColor1}
  ${smallMobile} {
    padding: 1rem 0;
  }

  ${({ ...rest }) => {
    const { background, margin } = rest;
    return css`
      margin: ${margin};
      background: ${background};
    `;
  }}
`;

export default memo(Title);
