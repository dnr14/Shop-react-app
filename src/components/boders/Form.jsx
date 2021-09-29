import React, { memo, useCallback, useRef, useState } from "react";
import { StyledForm } from "style/border/Form.styled";
import Edit from "./Edit";

const Form = ({ handleBorderSubmit }) => {
  const [gender, setGender] = useState({
    man: true,
    girl: false,
  });

  const inputRef = useRef(null);

  const handleGanderChange = (e) => {
    if (e.target.name === "girl") {
      setGender((prev) =>
        prev.girl === true
          ? prev
          : {
              man: false,
              girl: true,
            }
      );
    } else {
      setGender((prev) =>
        prev.man === true
          ? prev
          : {
              man: true,
              girl: false,
            }
      );
    }
  };

  const fileNameChange = useCallback(
    (e) => (inputRef.current.value = e.target.value),
    []
  );

  return (
    <StyledForm onSubmit={handleBorderSubmit}>
      <div>
        <div>
          <input type="text" name="id" placeholder="닉네임" autoComplete={"off"} />
          <input type="password" name="password" placeholder="비밀번호" />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="man"
              checked={gender.man}
              onChange={handleGanderChange}
            />
            <span>👨‍🦲</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="girl"
              checked={gender.girl}
              onChange={handleGanderChange}
            />
            <span>👧</span>
          </label>
        </div>
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
