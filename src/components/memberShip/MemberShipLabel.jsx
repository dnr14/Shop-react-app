import React, { memo } from "react";
import { maxWidthByBreakPointTable } from "style/Styled";
import styled, { css } from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  line-height: 2rem;
  font-size: 1rem;

  ${maxWidthByBreakPointTable(css`
    line-height: 1.5rem;
    font-size: 0.5rem;
  `)}
`;

const MemberShipLabel = ({ htmlFor, text }) => {
  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default memo(MemberShipLabel);
