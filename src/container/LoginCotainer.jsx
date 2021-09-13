import LoginForm from "components/login/LoginForm";
import React, { useCallback, useEffect } from "react";
import { StyledMaxWidth } from "style/Styled";
import Title from "components/common/Title";
import useAuthAsync from "hooks/useAuthAsync";
import { useHistory } from "react-router";
import { useForm } from "hooks/useForm";
import Loading from "components/common/Loading";

const LoginCotainer = () => {
  const history = useHistory();
  const [loginForm, handleChange] = useForm({
    id: "",
    password: "",
  });
  const [state, callLoginApi] = useAuthAsync();
  const { loading, error, success } = state;
  console.log(error);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      callLoginApi("/api/auth/login", loginForm);
    },
    [loginForm, callLoginApi]
  );

  useEffect(() => {
    // if (success) history.push("/");
  }, [success, history]);

  console.log(state);

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
