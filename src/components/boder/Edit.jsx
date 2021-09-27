import React, { forwardRef, useCallback, useState } from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 150px;
  padding: 20px;
`;

const Edit = (_, ref) => {
  const [text, setText] = useState("");
  const handleChange = useCallback((e) => setText(e.target.value), []);
  return (
    <>
      <div>
        <StyledTextArea
          name="edit"
          id="edit"
          placeholder="댓글을 입력해주세요."
          value={text}
          onChange={handleChange}
          ref={ref.editInput}
        />
      </div>
      <div>
        <span>{text.length} / 300</span>
      </div>
    </>
  );
};

export default forwardRef(Edit);
