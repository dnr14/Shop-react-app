import React from "react";
import Title from "components/common/Title";
import Button from "components/common/Button";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";
import Form from "components/common/Form";
import withLoading from "hoc/withLoading";
import Input from "components/common/Input";
import ErrorMessage from "components/common/ErrorMessage";
import styled from "styled-components";
import Label from "components/common/Label";

const LoginForm = ({ handleSubmit, handleChange, loginForm, visible }) => {
  const { id, password } = loginForm;
  const { path } = useRouteMatch();
  return (
    <>
      <Title text="로그인" />
      <Form onSubmit={handleSubmit}>
        <Label text="아이디" margin="10px 0" fontSize="15px" />
        <Input
          type="text"
          name="id"
          value={id.value}
          onChange={handleChange}
          maxLength="20"
          placeholder="아이디를 입력하세요."
          error={id.vaildation ? true : false}
        />
        <ErrorMessage message={id.vaildation?.message} />
        <Label text="패스워드" margin="10px 0" fontSize="15px" />
        <Input
          type="password"
          name="password"
          value={password.value}
          onChange={handleChange}
          maxLength="20"
          placeholder="비밀번호를 입력하세요."
          error={password.vaildation ? true : false}
        />
        <ErrorMessage message={password.vaildation?.message} />
        <Button type="submit" text="로그인" width="100%" margin="10px 0 0 0" />
      </Form>
      <Path text="아이디 찾기" path={path} endPoint="id" />
      <Path text="비밀번호 찾기" path={path} endPoint="password" />
    </>
  );
};

const CustomLink = styled(Link)`
  display: inline-block;
  width: 50%;
`;

function Path({ path, text, endPoint }) {
  return (
    <CustomLink to={`${path}/find/${endPoint}`}>
      <Button text={text} width="100%" />
    </CustomLink>
  );
}

export default withLoading(LoginForm);
