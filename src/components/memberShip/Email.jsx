import FormError from "components/common/FormError";
import React, { memo } from "react";
import MemberShipInput from "./MemberShipInput";
import MemberShipLabel from "./MemberShipLabel";
import MemberShipLayout from "./MemberShipLayout";

const Email = ({ email, handleChange }) => {
  const { isError, value, errorText } = email;
  return (
    <>
      <MemberShipLayout>
        <MemberShipLabel htmlFor="email" text="이메일" />
        <MemberShipInput
          type="text"
          id="email"
          name="email"
          placeholder="이메일을 입력해주세요."
          onChange={handleChange}
          error={isError}
          value={value}
        />
      </MemberShipLayout>
      <FormError message={errorText} />
    </>
  );
};

export default memo(Email);
