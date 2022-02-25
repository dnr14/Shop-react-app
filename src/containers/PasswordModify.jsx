import useSignupForm from "hooks/useSignupForm";
import React, { useCallback, useEffect, useState } from "react";
import usePasswordModify from "hooks/usePasswordModify";
import { isEmpty } from "utils/Validation";
import NewPasswordForm from "components/NewPasswordForm";
import Modal from "components/common/Modal";
import Title from "components/common/Title";
import Input from "components/common/Input";
import styled from "styled-components";
import Label from "components/common/Label";
import { tab } from "assets/style/GlobalStyled";
import { mobile } from "assets/style/GlobalStyled";
import useLogout from "hooks/useLogout";

const PasswordModify = ({ id, email }) => {
  //eslint-disable-next-line
  const [form, _, handleChange] = useSignupForm(false);
  const [fetchState, fetchPasswordModify] = usePasswordModify();
  const [visible, setVisible] = useState(false);
  const { loading, success } = fetchState;
  const [message, setMessage] = useState(null);
  const { password, confirmPassword } = form;
  const { logout } = useLogout();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      try {
        if (isEmpty(password.value) || isEmpty(confirmPassword.value))
          throw new Error("빈칸을 입력해주세요.");

        if (password.isError || confirmPassword.isError)
          throw new Error("옳바른 값을 입력해주세요.");

        fetchPasswordModify({
          id,
          currentPassword: password.value,
          newPassword: confirmPassword.value,
        });
      } catch (error) {
        setMessage(error.message);
        setVisible(true);
      }
    },
    [password, confirmPassword, id, fetchPasswordModify]
  );

  useEffect(() => {
    if (success) logout();
  }, [success, logout]);

  return (
    <PasswordModifyWrapper>
      <Title text="비밀번호 변경" />
      <Label text="아이디" />
      <Input defaultValue={id} readOnly />
      <Label text="이메일" />
      <Input defaultValue={email} readOnly />
      <NewPasswordForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        form={form}
      />
      <Modal setVisible={setVisible} visible={visible} message={message} />
    </PasswordModifyWrapper>
  );
};

const PasswordModifyWrapper = styled.article`
  margin: 0 auto;
  width: 60%;

  ${tab} {
    width: 80%;
  }
  ${mobile} {
    width: 95%;
  }
  label {
    margin: 10px 0;
    text-align: left;
  }
`;

export default PasswordModify;
