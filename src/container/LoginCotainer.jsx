import LoginForm from "components/login/LoginForm";
import React, { useCallback, useState } from "react";
import axios from "axios";
import { StyledMaxWidth } from "style/Styled";
import Title from "components/common/Title";

const API_URI = "/api/auth";

const LoginCotainer = () => {
  const [loginForm, setLoginForm] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .post(`${API_URI}/login`, {
          ...loginForm,
        })
        .then(console.log)
        .catch(console.log);
    },
    [loginForm]
  );

  const handleChane = useCallback((e) => setLoginForm((prevState) => ({ ...prevState, [`${e.target.name}`]: e.target.value })), []);

  return (
    <StyledMaxWidth>
      <main>
        <section>
          <Title>로 그 인</Title>
          <LoginForm handleSubmit={handleSubmit} handleChane={handleChane} loginForm={loginForm} />
        </section>
      </main>
    </StyledMaxWidth>
  );
};

export default LoginCotainer;
