import React, { memo, useMemo } from "react";
import { maxWidthByBreakPointMobile } from "style/Styled";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import styled, { css } from "styled-components";
import ServerError from "components/common/ServerError";
import FormError from "components/common/FormError";
import WithInput from "hoc/WithInput";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  font-size: 1rem;
  padding: 0 15px;
  border-radius: 5px;
  border: 1px solid rgba(127, 140, 141, 0.8);
  ${({ vaildation }) =>
    vaildation &&
    css`
      border: 1px solid #c0392b;
    `}

  color: rgba(44, 62, 80, 1);
  &::placeholder {
    color: rgba(127, 140, 141, 0.5);
  }
`;

const StyledForm = styled.form`
  max-width: 30%;
  margin: 0 auto;

  ${maxWidthByBreakPointMobile(
    css`
      max-width: 50%;
    `
  )}
`;

const StyledTextBox = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;

  ${maxWidthByBreakPointMobile(
    css`
      font-size: 1rem;
      span {
        line-height: 1rem;
      }
    `
  )}
`;

const StyledBtn = styled.button`
  display: block;
  width: 100%;
  line-height: 2.2rem;
  background: rgba(46, 204, 113, 1);
  border: 1px solid transparent;
  border-radius: 2px;
  box-shadow: 2px 2px 3px rgba(00, 00, 00, 0.5);
  cursor: pointer;
  color: #fff;

  &:active {
    background: #fff;
    border: 1px solid #333;
    color: #333;
  }
`;

const addStyle = {
  margin: "10px 0",
};

const LoginForm = ({ handleSubmit, handleChange, loginForm, error }) => {
  const { id, password } = loginForm;

  //memo or useMemo로 퓨어하게 관리가 가능하다.
  //쓰면서 편한대로 쓰면되겠다.
  const pureId = useMemo(() => <Id handleChange={handleChange} id={id} />, [id, handleChange]);
  const purePassword = useMemo(() => <Password handleChange={handleChange} password={password} />, [password, handleChange]);

  // styledINput을 빼고
  // 합성해서 칠드런이 같으면 재 랜더 안되도록 바꺼보자.
  //

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextBox text="아 이 디" />
      {pureId}
      <TextBox text="패 스 워 드" />
      {purePassword}
      <Submit />
      {error && <ServerError error={error} />}
    </StyledForm>
  );
};

const Id = function Id({ handleChange, id }) {
  return (
    <>
      <WithInput
        type="text"
        name="id"
        value={id.value}
        onChange={handleChange}
        maxLength="20"
        autoComplete="username"
        placeholder="아이디를 입력하세요."
        vaildation={id.vaildation}
      />
      {id.vaildation && <FormError vaildation={id.vaildation} />}

      {/* <Row addStyle={addStyle}>
        <Col>
          <StyledInput
            type="text"
            name="id"
            value={id.value}
            onChange={handleChange}
            maxLength="20"
            autoComplete="username"
            placeholder="아이디를 입력하세요."
            vaildation={id.vaildation}
          />
          {id.vaildation && <FormError vaildation={id.vaildation} />}
        </Col>
      </Row> */}
    </>
  );
};

const Password = function Password({ handleChange, password }) {
  return (
    <>
      <Row addStyle={addStyle}>
        <Col>
          <StyledInput
            type="password"
            name="password"
            value={password.value}
            onChange={handleChange}
            maxLength="20"
            autoComplete="current-password"
            placeholder="비밀번호를 입력하세요."
            vaildation={password.vaildation}
          />
          {password.vaildation && <FormError vaildation={password.vaildation} />}
        </Col>
      </Row>
    </>
  );
};

const Submit = memo(function Submit() {
  return (
    <Row addStyle={addStyle}>
      <Col>
        <StyledBtn type="submit">로 그 인</StyledBtn>
      </Col>
    </Row>
  );
});

const TextBox = memo(
  function TextBox({ text }) {
    return (
      <Row addStyle={addStyle}>
        <Col>
          <StyledTextBox>
            <span>{text}</span>
          </StyledTextBox>
        </Col>
      </Row>
    );
  },
  (preveProps, nextProps) => nextProps.text === preveProps.text
);

export default LoginForm;
