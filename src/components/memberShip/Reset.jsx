import React, { memo } from "react";
import styled from "styled-components";
import MemberShipLayout from "./MemberShipLayout";

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

const Reset = ({ onReset }) => {
  return (
    <MemberShipLayout>
      <div>
        <StyledButton type="submit">입력</StyledButton>
        <StyledButton type="button" onClick={onReset}>
          초기화
        </StyledButton>
      </div>
    </MemberShipLayout>
  );
};

export default memo(Reset);

// const Button = memo(function Reset({ onReset }) {
//   return (
//     <Row addStyle={addStyled}>
//       <Col>
//         <StyledButton type="submit">입력</StyledButton>
//         <StyledButton type="button" onClick={onReset}>
//           초기화
//         </StyledButton>
//       </Col>
//     </Row>
//   );
// });
