import PasswordUpdate from "components/user/PasswordUpdate";
import useMemberShipForm from "hooks/useMemberShipForm";
import React, { useCallback, useEffect, useState } from "react";
import useUserPasswordUpdateAsync from "hooks/useUserPasswordUpdateAsync";
import { useHistory } from "react-router";

const UserPasswordUpdateContainer = ({ user }) => {
  const [form, _, handleChange] = useMemberShipForm(false);
  const [fetchState, setFatch] = useUserPasswordUpdateAsync();
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const { loading, error, success } = fetchState;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const passwordError = form.password.isError;
      const newPassowrdError = form.confirmPassword.isError;
      const currentPassword = form.password.value;
      const newPassword = form.confirmPassword.value;

      if (
        passwordError ||
        newPassowrdError ||
        currentPassword === "" ||
        newPassword === ""
      ) {
        return;
      }

      setFatch({
        id: user.id,
        currentPassword,
        newPassword,
      });
    },
    [form, user, setFatch]
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
  console.log(error);

  return (
    <PasswordUpdate
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setVisible={setVisible}
      user={user}
      form={form}
      visible={visible}
      loading={loading}
      error={error}
      success={success}
    />
  );
};

export default UserPasswordUpdateContainer;
