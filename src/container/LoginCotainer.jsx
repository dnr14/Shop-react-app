import LoginForm from "components/login/LoginForm";
import React, { useCallback, useState } from "react";
import axios from "axios";

const API_URI = "/api/auth";

const LoginCotainer = () => {
  const [state, setState] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_URI}/login`, {
        ...state,
      })
      .then(console.log)
      .catch(console.log);
  };
  const handleChane = useCallback((e) => setState((prevState) => ({ ...prevState, [`${e.target.name}`]: e.target.value })), []);

  return <LoginForm handleSubmit={handleSubmit} handleChane={handleChane} state={state} />;
};

export default LoginCotainer;
