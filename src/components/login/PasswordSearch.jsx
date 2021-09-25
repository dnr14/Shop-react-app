import Button from "components/common/Button";
import FormError from "components/common/FormError";
import Title from "components/common/Title";
import React from "react";
import { FlexBox } from "style/login/IdSearch.styled";

const PasswordSearch = ({ handleSubmit, handleChange, value }) => {
  const { email, id } = value;

  return (
    <div>
      <Title>비밀번호 찾기</Title>
      <form onSubmit={handleSubmit}>
        <FlexBox>
          <span>Id</span>
          <input type="text" name="id" onChange={handleChange} value={id.value} />
          <FormError message={id.errorText} />
          <span>Email</span>
          <input type="email" name="email" onChange={handleChange} value={email.value} />
          <FormError message={email.errorText} />
        </FlexBox>
        <div>
          <Button type="submit" text="찾 기" />
        </div>
      </form>
    </div>
  );
};

export default PasswordSearch;
