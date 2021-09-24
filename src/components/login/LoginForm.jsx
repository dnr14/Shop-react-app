import React from "react";
import styled, { css } from "styled-components";
import Id from "./Id";
import Password from "./Password";
import FormButton from "./FormButton";
import { StyledMaxWidth, minWidthByBreakPointMobile } from "style/Styled";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import PopUp from "./PopUp";

const StyledMain = styled.main`
  margin-top: 3rem;
`;

const Container = styled.section`
  margin: 0 auto;
  width: 80%;
  ${minWidthByBreakPointMobile({ width: "50%" })}
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
      <StyledMain>
        <Container>
          <Title>로 그 인</Title>
          <form onSubmit={handleSubmit}>
            <Id handleChange={handleChange} id={id} />
            <Password handleChange={handleChange} password={password} />
            <FormButton />
          </form>
          <Loading loading={state.loading} />
          <PopUp setVisible={setVisible} message={message} visible={visible} />
        </Container>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default LoginForm;
