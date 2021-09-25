import Button from "components/common/Button";
import FormError from "components/common/FormError";
import Title from "components/common/Title";
import React from "react";
import { FlexBox } from "style/login/IdSearch.styled";

const IdSearch = ({ handleSubmit, handleChange, value }) => {
  return (
    <div>
      <Title>아이디 찾기</Title>
      <form onSubmit={handleSubmit}>
        <FlexBox>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={value.email.value}
          />
          <FormError message={value.email.errorText} />
        </FlexBox>
        <div>
          <Button type="submit" text="찾 기" />
        </div>
      </form>
    </div>
  );
};

export default IdSearch;
