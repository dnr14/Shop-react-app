import React, { memo } from "react";
import FormError from "components/common/FormError";
import LoginInput from "./LoginInput";
import TextBox from "./TextBox";

const Password = ({ handleChange, password }) => {
  return (
    <>
      <TextBox text="패 스 워 드" />
      <LoginInput
        type="password"
        name="password"
        value={password.value}
        onChange={handleChange}
        maxLength="20"
        autoComplete="current-password"
        placeholder="비밀번호를 입력하세요."
        error={password.vaildation ? true : false}
      />
      <FormError message={password.vaildation?.message} />
    </>
  );
};

export default memo(Password);
