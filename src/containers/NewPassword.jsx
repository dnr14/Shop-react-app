import { getFetchPwUpdate } from "api/auth";
import Button from "components/common/Button";
import Form from "components/common/Form";
import ErrorMessage from "components/common/ErrorMessage";
import Input from "components/common/Input";
import Label from "components/common/Label";
import Modal from "components/common/Modal";
import useSignupForm from "hooks/useSignupForm";
import React, { memo, useState } from "react";
import { useHistory } from "react-router-dom";

const FETCH_STATE_INIT = {
  loading: false,
  data: null,
  success: null,
  error: null,
};

const NewPassword = ({ info }) => {
  // eslint-disable-next-line
  const [form, _, handleChange] = useSignupForm(false);
  const { id, email } = info;
  const [fetchState, setFetchState] = useState(FETCH_STATE_INIT);
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
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

    try {
      await getFetchPwUpdate(id.value, email.value, password);
      history.push("/login");
    } catch (error) {
      setFetchState({
        ...FETCH_STATE_INIT,
        error: "에러가 발생 했습니다.",
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label text="새 비밀번호" margin="10px 0" />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          value={form.password.value}
          placeholder="비밀번호를 입력해주세요."
        />
        <ErrorMessage message={form.password.errorText} />
        <Button
          type="submit"
          text="변경"
          width="100%"
          margin="10px 0 0 0"
          padding="5px 0"
        />
      </Form>
      <Modal
        message={fetchState.error}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default memo(NewPassword);
