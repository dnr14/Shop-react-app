import React, { memo } from "react";
import { StyledButton } from "style/common/Button.styled";

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default memo(Button);
