import React from "react";
import withLoading from "hoc/withLoading";
import Form from "components/common/Form";
import SignupInput from "./SignupInput";

const SignupForm = ({ handleSubmit, handleChange, signup, children }) => {
  const { id, email, password, confirmPassword } = signup;
  return (
    <Form onSubmit={handleSubmit}>
      <SignupInput
        labelText="아이디"
        type="text"
        name="id"
        placeholder="아이디를 입력하세요."
        onChange={handleChange}
        value={id.value}
        error={id.isError}
        message={id.errorText}
      />
      <SignupInput
        labelText="이메일"
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        onChange={handleChange}
        value={email.value}
        error={email.isError}
        message={email.errorText}
      />
      <SignupInput
        labelText="비밀번호"
        type="password"
        name="password"
        autoComplete="current-password"
        placeholder="비밀번호를 입력해주세요."
        onChange={handleChange}
        value={password.value}
        error={password.isError}
        message={password.errorText}
      />
      <SignupInput
        labelText="비밀번호 재확인"
        type="password"
        name="confirmPassword"
        autoComplete="current-password"
        placeholder="동일한 비밀번호를 입력해주세요."
        onChange={handleChange}
        value={confirmPassword.value}
        error={confirmPassword.isError}
        message={confirmPassword.errorText}
      />
      {children}
    </Form>
  );
};

export default withLoading(SignupForm);
