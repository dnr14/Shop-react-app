import { memo } from "react";
import TextBox from "./TextBox";
import FormError from "components/common/FormError";
import LoginInput from "./LoginInput";

const Id = ({ handleChange, id }) => {
  return (
    <>
      <TextBox text="아 이 디" />
      <LoginInput
        type="text"
        name="id"
        value={id.value}
        onChange={handleChange}
        maxLength="20"
        autoComplete="username"
        placeholder="아이디를 입력하세요."
        error={id.vaildation ? true : false}
      />
      <FormError message={id.vaildation?.message} />
    </>
  );
};
export default memo(Id);
