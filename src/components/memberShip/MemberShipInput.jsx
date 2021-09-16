import React, { memo } from "react";
import { maxWidthByBreakPointTable } from "style/Styled";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  margin: 0;
  height: 2rem;
  padding: 0.1rem 0 0.1rem 0.8rem;
  font-size: 0.8rem;
  letter-spacing: 0.09rem;
  border-radius: 2px;
  color: #34495e;

  ${({ error, value }) =>
    error
      ? css`
          border: 1px solid #e74c3c;
          border-radius: 2px;
        `
      : value === ""
      ? css`
          border: 1px solid #34495e;
          border-radius: 2px;
        `
      : css`
          border: 1px solid #2ecc71;
          border-radius: 2px;
        `}

  ${maxWidthByBreakPointTable(css`
    height: 1.5rem;
  `)}
`;

const MemberShipInput = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default memo(MemberShipInput);
