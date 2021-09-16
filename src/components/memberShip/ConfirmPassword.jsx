import FormError from "components/common/FormError";
import React, { memo } from "react";
import MemberShipInput from "./MemberShipInput";
import MemberShipLabel from "./MemberShipLabel";
import MemberShipLayout from "./MemberShipLayout";

const ConfirmPassword = ({ confirmPassword, handleChange }) => {
  const { isError, value, errorText } = confirmPassword;
  return (
    <>
      <MemberShipLayout>
        <MemberShipLabel htmlFor="confirmPassword" text="비밀번호 확인" />
        <MemberShipInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="current-password"
          placeholder="동일한 비밀번호를 입력해주세요."
          onChange={handleChange}
          error={isError}
          value={value}
        />
      </MemberShipLayout>
      <FormError message={errorText} />
    </>
  );
};

export default memo(ConfirmPassword);
