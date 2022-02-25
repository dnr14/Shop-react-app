import LoginForm from "components/LoginForm";
import React, { useCallback, useEffect, useState } from "react";
import useLogin from "hooks/useLogin";
import { Route, useHistory, useRouteMatch } from "react-router";
import { useForm } from "hooks/useForm";
import { useAuthContext } from "contexts/AuthProvider";
import { setAccessToken } from "utils/LocalStorageUtil";
import styled from "styled-components";
import { mobile } from "assets/style/GlobalStyled";
import { smallMobile } from "assets/style/GlobalStyled";
import Modal from "components/common/Modal";
import Find from "./Find";

const Login = () => {
  const { setAccess } = useAuthContext();

  const history = useHistory();
  const { path } = useRouteMatch();
  const [loginForm, handleChange] = useForm();
  const [login, fetchLogin] = useLogin();
  const { loading } = login;
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const { id, password } = loginForm;

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (
        id.vaildation !== null ||
        password.vaildation !== null ||
        String(id.value) === "" ||
        String(password.value) === ""
      ) {
        setVisible(true);
        setMessage("아이디 비밀번호를 입력 해주세요.");
        return;
      }

      if (id.vaildation === null && password.vaildation === null) {
        fetchLogin("/api/auth/login", id.value, password.value);
        return;
      }
    },
    [id, password, fetchLogin, setMessage],
  );

  useEffect(() => {
    const { success, token, error } = login;
    if (success) {
      setAccessToken(token);
      setAccess(true);
      history.push("/");
      return;
    }
    if (error) {
      setVisible(true);
      setMessage(error);
    }
  }, [history, setAccess, login, setMessage]);

  return (
    <Wrapper>
      <Route path={`${path}`} exact>
        <LoginForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          loading={loading}
          loginForm={loginForm}
          visible={visible}
        />
      </Route>
      <Route path="/login/find" component={Find} />
      <Modal setVisible={setVisible} message={message} visible={visible} />
    </Wrapper>
  );
};

export const Wrapper = styled.article`
  margin: 0 auto;
  width: 50%;
  ${mobile} {
    width: 70%;
  }
  ${smallMobile} {
    width: 90%;
  }
`;

export default Login;
