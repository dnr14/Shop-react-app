import React, { memo, useCallback, useRef } from "react";
import { Errors, StyledForm } from "style/boards/Form.styled";
import Edit from "./Edit";
import Gender from "./Gender";
import { useForm } from "react-hook-form";
import { isSpecialSymbol, isKoreaLengCheck, isWhiteSpaceCheck } from "utils/Validation";

const Form = ({ handleBoardsSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const inputRef = useRef(null);

  const fileNameChange = useCallback(
    (e) => (inputRef.current.value = e.target.value),
    []
  );

  return (
    <StyledForm onSubmit={handleSubmit(handleBoardsSubmit(reset))}>
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
          <Errors>
            {errors.id?.type === "required" && "* 아이디는 필수 입니다."}
            {errors.id?.type === "minLength" && "* 최소 4자 이상입니다."}
            {errors.id?.type === "maxLength" && "* 최대 8자 입니다."}
            {errors.id?.type === "specialSymbol" && "* 특수문자가 들어갔습니다."}
            {errors.id?.type === "koreaLengCheck" && "* 한글이 들어갔습니다."}
            {errors.id?.type === "whiteSpaceCheck" && "* 공백이 들어갔습니다."}
          </Errors>

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
          <Errors>
            {errors.password?.type === "maxLength" && "* 최대 10자 입니다."}
            {errors.password?.type === "minLength" && "* 최소 4자 이상입니다."}
            {errors.password?.type === "required" && "* 비밀번호는 필수 입니다."}
            {errors.password?.type === "whiteSpaceCheck" && "* 공백이 들어갔습니다."}
          </Errors>
        </div>
        <Gender register={register} />
      </div>
      <Edit register={register} watch={watch} errors={errors} />
      <div>
        <input type="text" ref={inputRef} placeholder="첨부파일" disabled />
        <label htmlFor="file">파일찾기</label>
        <input
          type="file"
          id="file"
          {...register("file", {
            validate: {
              check: (value) => {
                if (value.length === 0) return true;
                const extension = String(value[0].name).split(".")[1];
                if (extension === "jpeg" || extension === "png" || extension === "gif") {
                  return true;
                }
                return false;
              },
            },
          })}
          onChange={fileNameChange}
        />
      </div>
      <Errors>{errors.file?.type === "check" && "* jpeg png gif만 가능합니다."}</Errors>
    </StyledForm>
  );
};

export default memo(Form);
