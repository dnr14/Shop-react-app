import React, { memo, useCallback, useRef } from "react";
import { StyledForm } from "style/border/Form.styled";
import Edit from "./Edit";
import Gender from "./Gender";

const Form = ({ handleBorderSubmit }) => {
  const inputRef = useRef(null);

  const fileNameChange = useCallback(
    (e) => (inputRef.current.value = e.target.value),
    []
  );

  return (
    <StyledForm onSubmit={handleBorderSubmit}>
      <div>
        <div>
          <input type="text" name="id" placeholder="닉네임(익명)" autoComplete={"off"} />
          <input type="password" name="password" placeholder="비밀번호" />
        </div>
        <Gender />
      </div>
      <Edit />
      <div>
        <input type="text" ref={inputRef} placeholder="첨부파일" disabled />
        <label htmlFor="file">파일찾기</label>
        <input type="file" name="file" id="file" onChange={fileNameChange} />
      </div>
    </StyledForm>
  );
};

export default memo(Form);
