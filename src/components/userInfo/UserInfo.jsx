import React from "react";
import { StyledMaxWidth } from "style/Styled";
import PropTypes from "prop-types";
import styled from "styled-components";
import UserInfoInput from "./UserInfoInput";
import Title from "components/common/Title";
import { Link } from "react-router-dom";

const StyledSection = styled.section`
  width: 50%;
  margin: 0 auto;

  .userInfo-layout {
    padding: 20px 2%;
    box-sizing: border-box;
    word-break: break-word;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  color: #fff;
  background-color: #2ecc71;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    box-shadow: 2px 2px 2px rgba(44, 62, 80, 0.5);
  }
`;

const UserInfo = ({ info }) => {
  return (
    <StyledMaxWidth>
      <main>
        <StyledSection>
          <Title>마이페이지</Title>
          <div className="userInfo-layout">
            <UserInfoInput text="아이디" type="text" defaultValue={info.id} />
            <UserInfoInput text="이메일" type="text" defaultValue={info.email} />
          </div>
          <div className="userInfo-layout">
            <Link to="/">
              <StyledButton>수정하기</StyledButton>
            </Link>
          </div>
        </StyledSection>
      </main>
    </StyledMaxWidth>
  );
};

UserInfo.propTypes = {
  info: PropTypes.object.isRequired,
};

export default UserInfo;
