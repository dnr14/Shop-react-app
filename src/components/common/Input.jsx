import { getBorderRedColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow3 } from "assets/style/GlobalStyled";
import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Input = ({ register, ...rest }) => {
  if (register) return <StyledInput {...register} {...rest} />;

  return <StyledInput {...rest} />;
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 45px;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  ${getBoxShadow3}
  &::placeholder {
    color: rgba(127, 140, 141, 0.5);
  }
  ${({ ...rest }) => {
    const { error, flex, margin } = rest;
    return css`
      margin: ${margin};
      flex: ${flex};
      ${error && getBorderRedColor1};
    `;
  }}
`;

export default Input;
