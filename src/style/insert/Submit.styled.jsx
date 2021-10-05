import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${css`
    ${({ customStyle }) => customStyle};
  `}
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(52, 73, 94, 1);
  border: 1px solid transparent;

  &:active {
    background-color: #fff;
    color: #000;
    border: 1px solid;
  }
`;
