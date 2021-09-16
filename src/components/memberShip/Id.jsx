import FormError from "components/common/FormError";
import React, { memo } from "react";
import MemberShipInput from "./MemberShipInput";
import MemberShipLabel from "./MemberShipLabel";
import MemberShipLayout from "./MemberShipLayout";

const Id = ({ id, handleChange }) => {
  return (
    <>
      <MemberShipLayout>
        <MemberShipLabel htmlFor="id" text="아이디" />
        <MemberShipInput
          error={id.isError}
          type="text"
          id="id"
          name="id"
          placeholder="아이디를 입력해주세요."
          onChange={handleChange}
          value={id.value}
        />
      </MemberShipLayout>
      <FormError message={id.errorText} />
    </>
  );
};

export default memo(Id);
