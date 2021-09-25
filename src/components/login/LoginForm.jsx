import React from "react";
import Id from "./Id";
import Password from "./Password";
import FormButton from "./FormButton";
import { StyledMaxWidth } from "style/Styled";
import Loading from "components/common/Loading";
import Title from "components/common/Title";
import PopUp from "./PopUp";
import { StyledMain, Container } from "style/login/LoginForm.styled";
import Button from "components/common/Button";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";

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

  const match = useRouteMatch();

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
          <div>
            <Link to={`${match.path}/search/id`}>
              <Button text="아이디 찾기" />
            </Link>
            <Link to={`${match.path}/search/password`}>
              <Button text="비밀번호 찾기" />
            </Link>
          </div>
          <Loading loading={state.loading} />
          <PopUp setVisible={setVisible} message={message} visible={visible} />
        </Container>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default LoginForm;
