import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import Title from "components/common/Title";
import { Link } from "react-router-dom";
import { StyledMaxWidth } from "style/Styled";
import { StyledSection, UpdateButton, Container, LayOut } from "style/user/User.styled";

const UserInfo = ({ info }) => {
  return (
    <StyledMaxWidth>
      <Container>
        <StyledSection>
          <Title>마이페이지</Title>
          <LayOut>
            <Input text="아이디" type="text" defaultValue={info.id} />
            <Input text="이메일" type="text" defaultValue={info.email} />
          </LayOut>
          <LayOut>
            <Link to="/me/password">
              <UpdateButton>비밀번호 수정</UpdateButton>
            </Link>
            <UpdateButton>회원 탈퇴</UpdateButton>
          </LayOut>
        </StyledSection>
      </Container>
    </StyledMaxWidth>
  );
};

UserInfo.propTypes = {
  info: PropTypes.object.isRequired,
};

export default UserInfo;
