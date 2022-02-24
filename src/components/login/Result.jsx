import Button from "components/common/Button";
import Input from "components/common/Input";
import Title from "components/common/Title";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Result = ({ data }) => {
  return (
    <ResultWrapper>
      <Title text="결과" />
      <p className="id">아아디 </p>
      <Input defaultValue={data.id} readOnly />
      <p className="email">이메일 </p>
      <Input defaultValue={data.email} readOnly />
      <Link to="/login">
        <Button
          text="로그인 하기"
          width="100%"
          padding="5px 0"
          margin="10px 0 0 0"
        />
      </Link>
    </ResultWrapper>
  );
};
const ResultWrapper = styled.div`
  font-size: 18px;
`;

export default Result;
