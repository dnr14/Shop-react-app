import React from "react";
import withdrawalImg from "assets/images/withdrawal.jpg";
import styled from "styled-components";
import { getFlex } from "assets/style/GlobalStyled";
import { mobile } from "assets/style/GlobalStyled";
const Withdrawal = ({ count }) => (
  <WithdrawalWrapper>
    <img src={withdrawalImg} alt="withdrawal" />
    <p>아이디가 삭제 되었습니다. 이용 해주셔서 감사합니다.</p>
    <p>{count}초 후 자동으로 이동 합니다.</p>
  </WithdrawalWrapper>
);

const WithdrawalWrapper = styled.article`
  ${getFlex("center", "center", "column")}
  gap:10px;
  margin-top: 1rem;
  font-size: 1.2rem;

  ${mobile} {
    width: 100%;
    font-size: 1.5rem;
  }
  img {
    max-width: 700px;
    width: 50%;
    margin: 0 auto;
    ${mobile} {
      width: 100%;
    }
  }

  p {
    margin: 0;
  }
`;

export default Withdrawal;
