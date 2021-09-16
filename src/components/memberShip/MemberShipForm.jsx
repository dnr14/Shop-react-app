import React from "react";
import { maxWidthByBreakPointTable, StyledMaxWidth } from "style/Styled";
import styled from "styled-components";
import Title from "components/common/Title";
import Loading from "components/common/Loading";
import PopUp from "components/login/PopUp";
import Id from "./Id";
import Email from "./Email";
import Password from "./Password";
import ConfirmPassword from "./ConfirmPassword";
import Reset from "./Reset";

const StyledDiv = styled.div`
  font-size: 1rem;
  ${maxWidthByBreakPointTable({
    fontSize: "0.5rem",
  })}
`;

const StyledMain = styled.main`
  width: 50%;
  margin: 0 auto;
`;

const MemberShipForm = ({
  handleSubmit,
  handleChange,
  memberShip,
  setVisible,
  onReset,
  loading,
  visible,
  message,
}) => {
  const { id, email, password, confirmPassword } = memberShip;

  return (
    <StyledMaxWidth>
      <StyledMain>
        <section>
          <Loading loading={loading} />
          <PopUp message={message} setVisible={setVisible} visible={visible} />
          <Title>회 원 가 입</Title>
          <form onSubmit={handleSubmit} autoComplete="off">
            <StyledDiv>
              <Id id={id} handleChange={handleChange} />
              <Email email={email} handleChange={handleChange} />
              <Password password={password} handleChange={handleChange} />
              <ConfirmPassword
                confirmPassword={confirmPassword}
                handleChange={handleChange}
              />
              <Reset onReset={onReset} />
            </StyledDiv>
          </form>
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default MemberShipForm;
