import React, { useCallback } from "react";
import { StyledDiv } from "style/boards/Edit.styled";
import { Errors } from "style/boards/Form.styled";
import { getNewlineCount as textUtile } from "utils/TextUtil";

const Edit = ({ register, watch, errors }) => {
  const getNewlineCount = useCallback(textUtile, []);

  return (
    <StyledDiv>
      <textarea
        placeholder="댓글을 입력해주세요."
        {...register("edit", {
          require: true,
          validate: {
            zero: (value) => value.length !== 0,
            newlineLimit: (value) => getNewlineCount(value ?? "") <= 15,
          },
          maxLength: 300,
          minLength: 4,
        })}
      />
      <span>{watch("edit") ? watch("edit").length : 0} / 300</span>
      <span>줄바꿈 {getNewlineCount(watch("edit") ?? "")}</span>
      <Errors>
        {errors.edit?.type === "required" && "* 내용은 필수 입니다."}
        {errors.edit?.type === "maxLength" && "* 최대 300자 이하 입니다."}
        {errors.edit?.type === "minLength" && "* 최소 4자 이상 입니다."}
        {errors.edit?.type === "zero" && "* 최소 4자 이상 입니다."}
        {errors.edit?.type === "newlineLimit" && "* 줄바꿈은 최대 15번 입니다. "}
      </Errors>
      <div>
        <button type="submit">등록</button>
      </div>
    </StyledDiv>
  );
};

export default Edit;
