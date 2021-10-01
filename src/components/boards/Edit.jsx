import React, { useCallback, useState } from "react";
import { StyledDiv } from "style/boards/Edit.styled";

const Edit = () => {
  const [text, setText] = useState("");
  const handleChange = useCallback((e) => setText(e.target.value), []);

  return (
    <StyledDiv>
      <textarea
        name="edit"
        placeholder="댓글을 입력해주세요."
        value={text}
        onChange={handleChange}
      />
      <span>{text.length} / 300</span>
      <div>
        <button type="submit">등록</button>
      </div>
    </StyledDiv>
  );
};

export default Edit;
