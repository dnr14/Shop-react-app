import FormError from "components/common/FormError";
import React, { memo } from "react";
import MemberShipInput from "./MemberShipInput";
import MemberShipLabel from "./MemberShipLabel";
import MemberShipLayout from "./MemberShipLayout";

const Password = ({ password, handleChange }) => {
  const { isError, value, errorText } = password;
  return (
    <>
      <MemberShipLayout>
        <MemberShipLabel htmlFor="password" text="비밀번호" />
        <MemberShipInput
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          placeholder="비밀번호를 입력해주세요."
          onChange={handleChange}
          error={isError}
          value={value}
        />
      </MemberShipLayout>
      <FormError message={errorText} />
    </>
  );
};

export default memo(Password);
