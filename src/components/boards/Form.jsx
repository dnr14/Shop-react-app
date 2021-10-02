import React, { memo, useCallback, useRef } from "react";
import { StyledForm } from "style/boards/Form.styled";
import Edit from "./Edit";
import Gender from "./Gender";
import { useForm } from "react-hook-form";
import { isSpecialSymbol, isKoreaLengCheck, isWhiteSpaceCheck } from "utils/Validation";

const Form = ({ handleBorderSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const inputRef = useRef(null);

  console.log(errors);

  const fileNameChange = useCallback(
    (e) => (inputRef.current.value = e.target.value),
    []
  );

  return (
    <StyledForm onSubmit={handleSubmit(handleBorderSubmit)}>
      <div>
        <div>
          <input
            type="text"
            placeholder="닉네임(익명)"
            autoComplete={"off"}
            maxLength="9"
            {...register("id", {
              validate: {
                specialSymbol: (value) => !isSpecialSymbol(value),
                koreaLengCheck: (value) => !isKoreaLengCheck(value),
                whiteSpaceCheck: (value) => !isWhiteSpaceCheck(value),
              },
              minLength: 4,
              maxLength: 8,
              required: true,
            })}
          />
          {errors.id?.type === "required" && <span>* 아이디는 필수 입니다.</span>}
          {errors.id?.type === "minLength" && <span>* 최소 4자 이상입니다.</span>}
          {errors.id?.type === "maxLength" && <span>* 최대 8자 입니다.</span>}
          {errors.id?.type === "specialSymbol" && <span>* 특수문자가 들어갔습니다.</span>}
          {errors.id?.type === "koreaLengCheck" && <span>* 한글이 들어갔습니다.</span>}
          {errors.id?.type === "whiteSpaceCheck" && <span>* 공백이 들어갔습니다.</span>}
          <input
            type="password"
            placeholder="비밀번호"
            maxLength="11"
            autoComplete="current-passowrd"
            {...register("password", {
              validate: {
                whiteSpaceCheck: (value) => !isWhiteSpaceCheck(value),
              },
              required: true,
              maxLength: 10,
              minLength: 4,
            })}
          />
          {errors.password?.type === "maxLength" && <span>* 최대 10자 입니다.</span>}
          {errors.password?.type === "minLength" && <span>* 최소 4자 이상입니다.</span>}
          {errors.password?.type === "required" && <span>* 비밀번호는 필수 입니다.</span>}
          {errors.password?.type === "whiteSpaceCheck" && (
            <span>* 공백이 들어갔습니다.</span>
          )}
        </div>
        <Gender register={register} />
      </div>
      <Edit register={register} />
      <div>
        <input type="text" ref={inputRef} placeholder="첨부파일" disabled />
        <label htmlFor="file">파일찾기</label>
        <input type="file" id="file" {...register("file")} onChange={fileNameChange} />
      </div>
    </StyledForm>
  );
};

export default memo(Form);
