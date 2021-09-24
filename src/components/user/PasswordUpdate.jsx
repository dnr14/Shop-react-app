import FormError from "components/common/FormError";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import PopUp from "components/login/PopUp";
import React from "react";
import { StyledMaxWidth } from "style/Styled";
import { Container } from "style/user/PasswordUpdate.styled";
import { UpdateButton } from "style/user/User.styled";
import Input from "./Input";

const addStyle = {
  boxShadow: "0px 2px 2px rgba(99, 110, 114,0.5)",
  borderRadius: "5px",
  fontSize: "0.8rem",
  letterSpacing: "0.5rem",
};

const PasswordUpdate = ({
  setVisible,
  visible,
  error,
  loading,
  form,
  info,
  handleChange,
  handleSubmit,
}) => {
  return (
    <StyledMaxWidth>
      <Container>
        <section>
          <Title>비밀번호 수정</Title>
          <Input text="아이디" type="text" defaultValue={info.id} disabled />
          <Input text="이메일" type="text" defaultValue={info.email} disabled />
          <form onSubmit={handleSubmit}>
            <Input
              text="기존 비밀번호"
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password.value}
              style={addStyle}
            />
            <FormError message={form.password.errorText} />
            <Input
              text="새로운 비밀번호"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={form.confirmPassword.value}
              style={addStyle}
            />
            <FormError message={form.confirmPassword.errorText} />
            <UpdateButton>수정하기</UpdateButton>
          </form>
          <Loading loading={loading} />
          <PopUp
            visible={visible}
            setVisible={setVisible}
            message={error?.data?.message}
          />
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

export default PasswordUpdate;
