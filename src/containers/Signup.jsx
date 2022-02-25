import SignupForm from "components/SignupForm";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useSignupForm from "hooks/useSignupForm";
import { isEmpty } from "utils/Validation";
import Title from "components/common/Title";
import styled from "styled-components";
import Modal from "components/common/Modal";
import Button from "components/common/Button";
import { getFlex } from "assets/style/GlobalStyled";
import { mobile } from "assets/style/GlobalStyled";
import { getFetchSignup } from "api/auth";

const Signup = () => {
  const [signup, onReset, handleChange] = useSignupForm();
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unblock = history.block((_, action) => {
      if (action === "POP" || action === "PUSH") {
        const { id, password, email } = signup;
        if (id.value !== "" || password.value !== "" || email.value !== "")
          return window.confirm("정보를 입력 했습니다. 뒤로 가겠습니까?");
      }
      return true;
    });
    return () => unblock();
  }, [history, signup]);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const { id, email, password, confirmPassword } = signup;
        if (isEmpty(id.value) || isEmpty(email.value) || isEmpty(password.value) || isEmpty(confirmPassword.value)) {
          throw new Error("입력 정보를 모두 써주세요.");
        }

        if (id.isError || email.isError || password.isError || confirmPassword.isError)
          throw new Error("옳바른 값을 입력해주세요.");

        await getFetchSignup(id.value, email.value, password.value);
        history.push("/login");
      } catch (error) {
        setVisible(true);
        setMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [signup, history, setMessage],
  );

  return (
    <SignupWrapper>
      <Title text="회원가입" />
      <SignupForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        onReset={onReset}
        signup={signup}
        loading={loading}
      >
        <ButtonsWrapper>
          <Button text="가입" width="100px" type="submit" />
          <Button text="초기화" width="100px" onClick={onReset} type="button" />
        </ButtonsWrapper>
      </SignupForm>
      <Modal message={message} setVisible={setVisible} visible={visible} />
    </SignupWrapper>
  );
};

const ButtonsWrapper = styled.div`
  ${getFlex("center")}
  gap:10px;
`;

const SignupWrapper = styled.article`
  width: 70%;
  margin: 0 auto;
  ${mobile} {
    width: 95%;
  }
`;

export default Signup;
