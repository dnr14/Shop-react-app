import LoginForm from "components/login/LoginForm";
import React, { useCallback, useEffect, useState } from "react";
import useAuthAsync from "hooks/useAuthAsync";
import { useHistory } from "react-router";
import { useForm } from "hooks/useForm";
import { useAuthContext } from "contexts/AuthContextProvider";
import { setAccessToken } from "utils/LocalStorageUtil";

const LoginCotainer = () => {
  const { setAccess } = useAuthContext();

  const history = useHistory();
  const [loginForm, handleChange] = useForm();
  const [state, callLoginApi] = useAuthAsync();
  const [popUpMessage, setPopUpMessage] = useState(null);
  const [visible, setVisible] = useState(false);
  const { id, password } = loginForm;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (
        id.vaildation !== null ||
        password.vaildation !== null ||
        String(id.value) === "" ||
        String(password.value) === ""
      ) {
        setVisible(true);
        setPopUpMessage("아이디 비밀번호를 입력 해주세요.");
        return;
      }

      if (id.vaildation === null && password.vaildation === null) {
        callLoginApi("/api/auth/login", id.value, password.value);
        return;
      }
    },
    [id, password, callLoginApi, setPopUpMessage]
  );

  useEffect(() => {
    if (state.success) {
      setAccessToken(state.token);
      setAccess(true);
      history.push("/");
    }

    if (state.error) {
      const { data } = state.error;
      setVisible(true);
      setPopUpMessage(data.error);
    }
  }, [history, setAccess, state, setPopUpMessage]);

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setVisible={setVisible}
      loginForm={loginForm}
      state={state}
      visible={visible}
      message={popUpMessage}
    />
  );
};

export default LoginCotainer;
