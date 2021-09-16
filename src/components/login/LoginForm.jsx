import React from "react";
import { maxWidthByBreakPointMobile } from "style/Styled";
import styled, { css } from "styled-components";
import Id from "./Id";
import Password from "./Password";
import FormButton from "./FormButton";
import { StyledMaxWidth } from "style/Styled";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import PopUp from "./PopUp";

const StyledForm = styled.form`
  max-width: 30%;
  margin: 0 auto;

  ${maxWidthByBreakPointMobile(
    css`
      max-width: 50%;
    `
  )}
`;

const LoginForm = ({
  handleSubmit,
  handleChange,
  loginForm,
  state,
  setVisible,
  visible,
  message,
}) => {
  const { id, password } = loginForm;
  return (
    <StyledMaxWidth>
      <main>
        <section>
          <Title>로 그 인</Title>
          <Loading loading={state.loading} />
          <PopUp setVisible={setVisible} message={message} visible={visible} />
          <StyledForm onSubmit={handleSubmit}>
            <Id handleChange={handleChange} id={id} />
            <Password handleChange={handleChange} password={password} />
            <FormButton />
          </StyledForm>
        </section>
      </main>
    </StyledMaxWidth>
  );
};

export default LoginForm;
