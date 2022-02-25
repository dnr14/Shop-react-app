import { getFlex } from "assets/style/GlobalStyled";
import ErrorMessage from "components/common/ErrorMessage";
import Input from "components/common/Input";
import Label from "components/common/Label";
import React, { memo } from "react";
import styled from "styled-components";

const SignupInput = ({
  labelText,
  type,
  name,
  placeholder,
  onChange,
  value,
  error,
  message,
}) => {
  return (
    <SignupInputWrapper>
      <Label flex={2} text={labelText} />
      <Input
        flex={8}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        error={error}
      />
      <ErrorMessage width="100%" message={message} />
    </SignupInputWrapper>
  );
};

const SignupInputWrapper = styled.div`
  ${getFlex("", "center")}
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export default memo(SignupInput);
