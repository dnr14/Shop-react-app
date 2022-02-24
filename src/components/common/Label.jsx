import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Label = ({ text, ...rest }) => (
  <StyledLabel {...rest}>{text}</StyledLabel>
);

const StyledLabel = styled.label`
  text-align: center;
  display: block;
  word-break: keep-all;

  ${({ ...rest }) => {
    const { margin, fontSize, flex } = rest;

    return css`
      flex: ${flex};
      font-size: ${fontSize};
      margin: ${margin};
    `;
  }}
`;

export default Label;
