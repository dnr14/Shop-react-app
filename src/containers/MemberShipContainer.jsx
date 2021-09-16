import MemberShipForm from "components/memberShip/MemberShipForm";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import useMemberShipForm from "hooks/useMemberShipForm";

const API_URI = "/api/users/";

const MemberShipContainer = () => {
  const [memberShip, onReset, handleChange] = useMemberShipForm();
  const [loading, setIsLoading] = useState(false);
  const history = useHistory();
  const [popUpMessage, setPopUpMessage] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unblock = history.block((_, action) => {
      if (action === "POP" || action === "PUSH") {
        const { id, password, email } = memberShip;
        if (id.value !== "" || password.value !== "" || email.value !== "") {
          return window.confirm("정보를 입력 했습니다. 뒤로 가겠습니까?");
        }
      }
      return true;
    });
    return () => unblock();
  }, [history, memberShip]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const { id, email, password, confirmPassword } = memberShip;
      const isIdValueEmpty = isEmpty(id.value);
      const isEmailValueEmpty = isEmpty(email.value);
      const isPasswordValueEmpty = isEmpty(password.value);
      const isConfirmPasswordValueEmpty = isEmpty(confirmPassword.value);

      if (
        isIdValueEmpty ||
        isEmailValueEmpty ||
        isPasswordValueEmpty ||
        isConfirmPasswordValueEmpty
      ) {
        setVisible(true);
        setPopUpMessage("입력 정보를 모두 써주세요.");
        return;
      }

      if (
        !id.isError &&
        !email.isError &&
        !password.isError &&
        !confirmPassword.isError
      ) {
        const showMessage = ({ response }) => {
          const { status, statusText, data } = response;
          if (data.message) {
            window.alert(data.message);
            return;
          }
          window.alert(`Status = ${status}, message = ${statusText}`);
        };

        setIsLoading(true);
        axios
          .post(API_URI, {
            id: memberShip.id.value,
            email: memberShip.email.value,
            password: memberShip.password.value,
          })
          .then(() => history.replace("/"))
          .catch(showMessage)
          .finally(() => setIsLoading(false));
      }
    },
    [memberShip, history, setPopUpMessage]
  );

  return (
    <MemberShipForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setVisible={setVisible}
      setPopUpMessage={setPopUpMessage}
      onReset={onReset}
      memberShip={memberShip}
      loading={loading}
      message={popUpMessage}
      visible={visible}
    />
  );
};

const isEmpty = (value) => {
  return String(value).length === 0;
};

export default MemberShipContainer;
