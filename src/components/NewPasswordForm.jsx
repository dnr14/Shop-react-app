import Button from "components/common/Button";
import ErrorMessage from "components/common/ErrorMessage";
import Form from "components/common/Form";
import Input from "components/common/Input";
import Label from "components/common/Label";
import withLoading from "hoc/withLoading";
import React from "react";

const NewPasswordForm = ({ handleSubmit, handleChange, form }) => {
  const { password, confirmPassword } = form;
  return (
    <Form onSubmit={handleSubmit}>
      <Label text="현재 비밀번호" />
      <Input text="기존 비밀번호" type="password" name="password" onChange={handleChange} value={password.value} />
      <ErrorMessage message={password.errorText} />
      <Label text="새로운 비밀번호" />
      <Input
        text="새로운 비밀번호"
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        value={confirmPassword.value}
      />
      <ErrorMessage message={confirmPassword.errorText} />
      <Button type="submit" text="수정" width="100%" margin="10px 0 0 0" />
    </Form>
  );
};

export default withLoading(NewPasswordForm);
