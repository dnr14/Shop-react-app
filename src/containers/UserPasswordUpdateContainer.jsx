import PasswordUpdate from "components/user/PasswordUpdate";
import useMemberShipForm from "hooks/useMemberShipForm";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useUserUpdate from "hooks/useUserUpdate";

const UserPasswordUpdateContainer = ({ info }) => {
  const [form, _, handleChange] = useMemberShipForm(false);
  const history = useHistory();
  const [apiState, getUserUpdateApi] = useUserUpdate();
  const { loading, error, success } = apiState;
  const [visible, setVisible] = useState(false);
  // setVisible, visible, message
  //success하면 다른 화면 랜더 해주고 몇초 후 메인으로 가게
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const passwordError = form.password.isError;
      const newPassowrdError = form.confirmPassword.isError;

      if (passwordError || newPassowrdError) {
        console.log("에러가 있다");
        return;
      }
      getUserUpdateApi({
        id: info.id,
        currentPassword: form.password.value,
        newPassword: form.confirmPassword.value,
      });
    },
    [form, getUserUpdateApi, info]
  );

  useEffect(() => {
    const unblock = history.block((_, action) => {
      if (action === "POP") {
        history.push("/");
        return false;
      }
      return true;
    });
    return () => unblock();
  }, [history]);

  useEffect(() => {
    if (error) {
      setVisible((p) => !p);
    }
  }, [error, setVisible]);

  if (success) {
    return (
      <div>
        <div>수정을 하였습니다.</div>
        <Link to="/">홈으로</Link>
      </div>
    );
  }

  return (
    <PasswordUpdate
      info={info}
      form={form}
      loading={loading}
      visible={visible}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setVisible={setVisible}
    />
  );
};

export default UserPasswordUpdateContainer;
