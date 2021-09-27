import React, { forwardRef } from "react";
import styled from "styled-components";
import Edit from "./Edit";

const StyledForm = styled.form``;

const Form = ({ handleBorderSubmit }, ref) => {
  return (
    <StyledForm onSubmit={handleBorderSubmit}>
      <div>
        <div>
          <input type="text" placeholder="닉네임" ref={ref.idInput} />
          <input type="password" placeholder="비밀번호" ref={ref.passwordInput} />
          <span>남</span>
          <span>녀</span>
        </div>
        <Edit ref={ref} />
        <div>
          <input type="file" name="file" />
        </div>
        <button type="submit">등록</button>
      </div>
    </StyledForm>
  );
};

export default forwardRef(Form);
