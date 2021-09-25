import Search from "components/login/Search";
import useMemberShipForm from "hooks/useMemberShipForm";
import React, { useEffect, useMemo, useState } from "react";
import * as auth from "axios/api/auth";
import { useLocation, useRouteMatch } from "react-router";

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

const IDorPasswordSearchContainer = () => {
  const match = useRouteMatch();
  const location = useLocation();

  const [form, onReset, handleChange] = useMemberShipForm();
  const [loading, setLoading] = useState(LOADING_INIT);
  const [success, setSuccess] = useState(SUCCESS_INIT);
  const [error, setError] = useState(ERROR_INIT);
  const [visible, setVisible] = useState(false);

  const path = useMemo(() => match.path, [match]);
  const pathname = useMemo(() => location.pathname, [location]);

  useEffect(() => {
    if (loading.isLoading) {
      if (`${path}/id` === pathname) {
        const email = form.email.value;
        auth
          .SearchId(email)
          .then((response) => {
            const { data } = response;
            setSuccess({ isSuccess: true, data: data.user });
            setLoading(LOADING_INIT);
            setError(ERROR_INIT);
          })
          .catch((error) => {
            setError({ isError: true, message: error.data.message });
            setVisible(true);
            setLoading(LOADING_INIT);
          });
        return;
      }

      console.log("호출");
      if (`${path}/password` === pathname) {
        const email = form.email.value;
        const id = form.id.value;

        auth
          .SearchPassword(id, email)
          .then((response) => {
            const { data } = response;
            console.log("성공");
            setSuccess({ isSuccess: true, data: data.user });
            setLoading(LOADING_INIT);
            setError(ERROR_INIT);
          })
          .catch((error) => {
            console.log("실패");
            setError({ isError: true, message: error.data?.message });
            setVisible(true);
            setSuccess(SUCCESS_INIT);
            setLoading(LOADING_INIT);
          });
        return;
      }
    }
  }, [loading, form, pathname, path]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (`${path}/id` === pathname) {
      const { email } = form;
      if (!email.value) {
        setError({ isError: true, message: "이메일을 입력하세요." });
        setVisible(true);
        return;
      }

      if (email.isError) {
        setError({ isError: true, message: email.errorText });
        setVisible(true);
        return;
      }
    }

    if (`${path}/password` === pathname) {
      const { id, email } = form;
      if (!email.value && !id.value) {
        setError({ isError: true, message: "모두 입력해주세요." });
        setVisible(true);
        return;
      }
      if (!email.value) {
        setError({ isError: true, message: "이메일을 입력해주세요." });
        setVisible(true);
        return;
      }
      if (!id.value) {
        setError({ isError: true, message: "아이디를 입력해주세요." });
        setVisible(true);
        return;
      }
      if (email.isError) {
        setError({ isError: true, message: email.errorText });
        setVisible(true);
        return;
      }
      if (id.isError) {
        setError({ isError: true, message: id.errorText });
        setVisible(true);
        return;
      }
    }

    setLoading((prev) => ({ ...prev, isLoading: true }));
  };

  return (
    <Search
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      setVisible={setVisible}
      value={form}
      loading={loading.isLoading}
      visible={visible}
      success={success}
      error={error}
      path={path}
      pathname={pathname}
    />
  );
};

export default IDorPasswordSearchContainer;
