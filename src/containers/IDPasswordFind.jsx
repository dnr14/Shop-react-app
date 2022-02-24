import useSignupForm from "hooks/useSignupForm";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useRouteMatch } from "react-router";
import { Route, Switch } from "react-router-dom";
import NotFound from "components/NotFound";
import Modal from "components/common/Modal";
import { getFetchFindId, getFetchFindPw } from "api/auth";
import Find from "components/login/Find";
import Label from "components/common/Label";
import Input from "components/common/Input";
import ErrorMessage from "components/common/ErrorMessage";
import Button from "components/common/Button";
import NewPassword from "./NewPassword";
import Result from "components/login/Result";

const LOADING_INIT = {
  isLoading: false,
};

const SUCCESS_INIT = {
  isSuccess: false,
  data: null,
};

const ERROR_INIT = {
  message: null,
  isError: false,
};

const IDPasswordFind = () => {
  const match = useRouteMatch();
  const location = useLocation();
  // eslint-disable-next-line
  const [form, _, handleChange] = useSignupForm();
  const [loading, setLoading] = useState(LOADING_INIT);
  const [success, setSuccess] = useState(SUCCESS_INIT);
  const [error, setError] = useState(ERROR_INIT);
  const [visible, setVisible] = useState(false);

  const path = useMemo(() => match.path, [match]);
  const pathname = useMemo(() => location.pathname, [location]);
  const { isLoading } = loading;
  const { isSuccess, data } = success;

  useEffect(() => {
    if (!isLoading) return;
    const fetchFindId = async () => {
      try {
        const { email } = form;
        const { data } = await getFetchFindId(email.value);
        setSuccess({ isSuccess: true, data: data.user });
        setError(ERROR_INIT);
      } catch (error) {
        const { message } = error.data;
        setError({ isError: true, message });
        setVisible(true);
      }
    };

    const fetchFindPw = async () => {
      const { email, id } = form;

      try {
        const { data } = await getFetchFindPw(id.value, email.value);
        setSuccess({ isSuccess: true, data: data.user });
        setError(ERROR_INIT);
      } catch (error) {
        const { message } = error.data;
        setError({ isError: true, message });
        setVisible(true);
      }
    };
    if (`${path}/id` === pathname) fetchFindId();
    if (`${path}/password` === pathname) fetchFindPw();
    setLoading(LOADING_INIT);
  }, [isLoading, form, pathname, path]);

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
    <div>
      <Switch>
        <Route path={`${path}/id`}>
          <Find titleText="아이디 찾기" handleSubmit={handleSubmit}>
            <Label text="이메일" margin="10px 0" />
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email.value}
              placeholder="이메일을 입력해주세요."
            />
            <ErrorMessage message={form.email.errorText} />
            <IDPasswordButton />
          </Find>
          {isSuccess && <Result data={data} />}
        </Route>
        <Route path={`${path}/password`}>
          <Find titleText="비밀번호 찾기" handleSubmit={handleSubmit}>
            <Label text="아아디" margin="10px 0" />
            <Input
              type="text"
              name="id"
              onChange={handleChange}
              value={form.id.value}
              placeholder="이메일을 입력해주세요."
            />
            <ErrorMessage message={form.id.errorText} />
            <Label text="이메일" margin="10px 0" />
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email.value}
              placeholder="이메일을 입력해주세요."
            />
            <ErrorMessage message={form.email.errorText} />
            <IDPasswordButton />
          </Find>
          {isSuccess && <NewPassword info={form} />}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <Modal
        visible={visible}
        setVisible={setVisible}
        message={error.message}
      />
    </div>
  );
};

function IDPasswordButton() {
  return (
    <Button
      type="submit"
      text="찾기"
      margin="10px 0 0 0"
      width="100%"
      padding="5px 0"
    />
  );
}

export default IDPasswordFind;
