import NewPassword from "components/user/NewPassword";
import React, { useState } from "react";

const LOADING_INIT = {
  isLoading: false,
  type: null,
};

const SUCCESS_INIT = {
  isSuccess: false,
  data: null,
  tpye: null,
};

const ERROR_INIT = {
  message: null,
  isError: false,
  type: null,
};

const NewPasswordContainer = ({ info }) => {
  const [form, setForm] = useState(info);
  const [loading, setLoading] = useState(LOADING_INIT);
  const [success, setSuccess] = useState(SUCCESS_INIT);
  const [error, setError] = useState(ERROR_INIT);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.id.value);
  };

  return (
    <NewPassword
      handleSubmit={handleSubmit}
      value={form}
      loading={loading}
      success={success}
      error={error}
    />
  );
};

export default NewPasswordContainer;
