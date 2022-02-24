import React from "react";
import Title from "components/common/Title";
import styled from "styled-components";
import { mobile } from "assets/style/GlobalStyled";
import Input from "components/common/Input";
import Label from "components/common/Label";
import { getFlex } from "assets/style/GlobalStyled";
import withLoading from "hoc/withLoading";

const MyInfo = ({ id, email, children }) => {
  return (
    <MyInfoWrapper>
      <Title text="마이페이지" />
      <Layout>
        <Label text="아이디" />
        <Input text="아이디" type="text" defaultValue={id} readOnly />
        <Label text="이메일" />
        <Input text="이메일" type="text" defaultValue={email} readOnly />
      </Layout>
      <Layout>{children}</Layout>
    </MyInfoWrapper>
  );
};

export const MyInfoWrapper = styled.article`
  margin: 0 auto;
  width: 50%;
  ${mobile} {
    width: 95%;
  }
`;

export const Layout = styled.div`
  ${getFlex("", "", "column")}
  margin-bottom: 20px;
  gap: 10px;
`;

export default withLoading(MyInfo);
