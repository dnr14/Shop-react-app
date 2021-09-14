import LoginForm from "components/login/LoginForm";
import React, { useCallback, useEffect } from "react";
import { StyledMaxWidth } from "style/Styled";
import Title from "components/common/Title";
import useAuthAsync from "hooks/useAuthAsync";
import { useHistory } from "react-router";
import { useForm } from "hooks/useForm";
import Loading from "components/common/Loading";
import { useAuthContext } from "contexts/AuthContextProvider";
import { setAccessToken } from "util/LocalStorageUtil";

const initialState = {
  id: "",
  password: "",
};

const LoginCotainer = () => {
  const { setAccess } = useAuthContext();

  const history = useHistory();
  const [loginForm, handleChange] = useForm(initialState);

  const [state, callLoginApi] = useAuthAsync();
  const { loading, error, success, token } = state;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      callLoginApi("/api/auth/login", loginForm);
    },
    [loginForm, callLoginApi]
  );

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      window.alert("이미 로그인 하셨습니다.");
      history.push("/");
    }

    if (success) {
      setAccessToken(token);
      setAccess(true);
      history.push("/");
    }
  }, [success, history, token, setAccess]);

  return (
    <StyledMaxWidth>
      {loading && <Loading />}
      <main>
        <section>
          <Title>로 그 인</Title>
          <LoginForm handleSubmit={handleSubmit} handleChange={handleChange} loginForm={loginForm} error={error} />
        </section>
      </main>
    </StyledMaxWidth>
  );
};

export default LoginCotainer;
