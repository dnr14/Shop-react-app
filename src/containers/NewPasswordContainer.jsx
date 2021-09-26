import NewPassword from "components/user/NewPassword";
import useMemberShipForm from "hooks/useMemberShipForm";
import React, { useState } from "react";
import * as auth from "axios/api/auth";

const FETCH_STATE_INIT = {
  loading: false,
  data: null,
  success: null,
  error: null,
};

const NewPasswordContainer = ({ info }) => {
  const [form, _, handleChange] = useMemberShipForm(false);
  const [fetchState, setFetchState] = useState(FETCH_STATE_INIT);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = form.password.value;

    if (password === "" || password === null || password === undefined) {
      setFetchState((prevState) => ({
        ...prevState,
        error: "비밀번호를 입력해주세요.",
      }));
      setVisible(true);
      return;
    }

    setFetchState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    (async () => {
      const { id, email } = info;
      try {
        const response = await auth.PasswordUpdate(id, email, password);
        setFetchState({
          ...FETCH_STATE_INIT,
          data: response.data,
          success: true,
        });
      } catch (error) {
        setFetchState({
          ...FETCH_STATE_INIT,
          error: "에러가 발생 했습니다.",
        });
      }
    })();
  };

  return (
    <NewPassword
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setVisible={setVisible}
      value={info}
      form={form}
      visible={visible}
      fetchState={fetchState}
    />
  );
};

export default NewPasswordContainer;
