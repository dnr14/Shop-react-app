import React, { memo } from "react";
import { Row, maxWidthByBreakPointTable, Col } from "style/Styled";
import styled, { css } from "styled-components";
import Error from "components/memberShip/Error";
import axios from "axios";

const StyledDiv = styled.div`
  font-size: 1rem;
  ${maxWidthByBreakPointTable({
    fontSize: "0.5rem",
  })}
`;

const StyledInput = styled.input`
  width: 100%;
  margin: 0;
  height: 2rem;
  padding: 0.1rem 0 0.1rem 0.8rem;
  font-size: 0.8rem;
  letter-spacing: 0.09rem;
  border-radius: 2px;
  color: #34495e;

  ${({ error, value }) =>
    error
      ? css`
          border: 1px solid #e74c3c;
          border-radius: 2px;
        `
      : value === ""
      ? css`
          border: 1px solid #34495e;
          border-radius: 2px;
        `
      : css`
          border: 1px solid #2ecc71;
          border-radius: 2px;
        `}

  ${maxWidthByBreakPointTable(css`
    height: 1.5rem;
  `)}
`;

const StyledButton = styled.button`
  & + & {
    margin-left: 10px;
  }

  background: rgba(46, 204, 113, 1);
  border: 1px solid transparent;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;

  &:active {
    background: #fff;
    color: #000;
    border: 1px solid #000;
    font-weight: bold;
  }
  &:hover {
    font-weight: bold;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
  line-height: 2rem;
  font-size: 1rem;

  ${maxWidthByBreakPointTable(css`
    line-height: 1.5rem;
    font-size: 0.5rem;
  `)}
`;

const addStyled = {
  margin: "10px 0px",
  textAlign: "center",
};

const labelSize = 4;
const inputSize = 8;

const MemberShipForm = ({ handleSubmit, handleChange, memberShip, onReset }) => {
  const { id, email, password, confirmPassword } = memberShip;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <StyledDiv>
        <Id id={id} handleChange={handleChange} />
        <Email email={email} handleChange={handleChange} />
        <Password password={password} confirmPassword={confirmPassword} handleChange={handleChange} />
        <Button onReset={onReset} />
      </StyledDiv>
    </form>
  );
};

const Id = memo(function Id({ id, handleChange }) {
  return (
    <>
      <Row addStyle={addStyled}>
        <Col xs={labelSize} sm={labelSize} md={labelSize} lg={labelSize}>
          <StyledLabel htmlFor="id">아이디</StyledLabel>
        </Col>
        <Col xs={inputSize} sm={inputSize} md={inputSize} lg={inputSize}>
          <StyledInput
            error={id.isError}
            type="text"
            id="id"
            name="id"
            placeholder="아이디를 입력해주세요."
            onChange={handleChange}
            value={id.value}
          />
        </Col>
      </Row>
      {id.isError && <Error>{id.errorText}</Error>}
    </>
  );
});

const Email = memo(function Email({ email, handleChange }) {
  return (
    <>
      <Row addStyle={addStyled}>
        <Col xs={labelSize} sm={labelSize} md={labelSize} lg={labelSize}>
          <StyledLabel htmlFor="email">이메일</StyledLabel>
        </Col>
        <Col xs={inputSize} sm={inputSize} md={inputSize} lg={inputSize}>
          <StyledInput
            error={email.isError}
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요."
            onChange={handleChange}
            value={email.value}
          />
        </Col>
      </Row>
      {email.isError && <Error>{email.errorText}</Error>}
    </>
  );
});

const Password = memo(function Password({ password, confirmPassword, handleChange }) {
  return (
    <>
      <Row addStyle={addStyled}>
        <Col xs={labelSize} sm={labelSize} md={labelSize} lg={labelSize}>
          <StyledLabel htmlFor="password">비밀번호</StyledLabel>
        </Col>
        <Col xs={inputSize} sm={inputSize} md={inputSize} lg={inputSize}>
          <StyledInput
            error={password.isError}
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChange}
            value={password.value}
            autoComplete="off"
          />
        </Col>
      </Row>
      {password.isError && <Error>{password.errorText}</Error>}
      <Row addStyle={addStyled}>
        <Col xs={labelSize} sm={labelSize} md={labelSize} lg={labelSize}>
          <StyledLabel htmlFor="confirmPassword">비밀번호 확인</StyledLabel>
        </Col>
        <Col xs={inputSize} sm={inputSize} md={inputSize} lg={inputSize}>
          <StyledInput
            error={confirmPassword.isError}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="비밀번호를 확인해주세요."
            onChange={handleChange}
            value={confirmPassword.value}
            autoComplete="off"
          />
        </Col>
      </Row>
      {confirmPassword.isError && <Error>{confirmPassword.errorText}</Error>}
    </>
  );
});

const Button = memo(function Reset({ onReset }) {
  return (
    <Row addStyle={addStyled}>
      <Col>
        <StyledButton type="submit">입력</StyledButton>
        <StyledButton type="button" onClick={onReset}>
          초기화
        </StyledButton>
      </Col>
    </Row>
  );
});

export default MemberShipForm;
