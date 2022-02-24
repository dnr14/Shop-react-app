import React, { memo, useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  isSpecialSymbol,
  isKoreaLengCheck,
  isWhiteSpaceCheck,
} from "utils/Validation";
import Form from "components/common/Form";
import styled from "styled-components";
import withLoading from "hoc/withLoading";
import Editt from "./Edit";
import { getTextAreaOption } from "utils/hookFormUtil";
import Input from "components/common/Input";
import ErrorMessage from "components/common/ErrorMessage";

const BoardForm = ({ handleBoardsSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [genderState, setGender] = useState({
    man: true,
    girl: false,
  });

  const inputRef = useRef(null);
  const textAreaWatch = watch("textArea");
  const { password, gender, textArea, id } = errors;

  const handleFileChange = useCallback(
    (e) => (inputRef.current.value = e.target.value),
    []
  );

  const handleGanderChange = (e) => {
    console.log(1);
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
  //   <input
  //   type="text"
  //   placeholder="닉네임(익명)"
  //   autoComplete={"off"}
  //   maxLength="9"
  //   {...register("id", {
  //     validate: {
  //       specialSymbol: (value) => !isSpecialSymbol(value),
  //       koreaLeng: (value) => !isKoreaLengCheck(value),
  //       whiteSpace: (value) => !isWhiteSpaceCheck(value),
  //     },
  //     minLength: 4,
  //     maxLength: 8,
  //     required: true,
  //   })}
  // />

  const idOption = {
    validate: {
      specialSymbol: (value) =>
        isSpecialSymbol(value) ? "특수문자가 들어갔습니다." : true,
      koreaLeng: (value) =>
        isKoreaLengCheck(value) ? "한글이 들어갔습니다." : true,
      whiteSpace: (value) =>
        isWhiteSpaceCheck(value) ? "공백이 들어갔습니다." : true,
    },
    minLength: {
      value: 4,
      mesaage: "최소 4자 이상입니다.",
    },
    maxLength: {
      value: 8,
      message: "최대 8자 입니다.",
    },
    required: "아이디는 필수 입니다.",
  };

  return (
    <CustomForm onSubmit={handleSubmit(handleBoardsSubmit(reset))}>
      <div>
        <div>
          <Input
            type="text"
            placeholder="닉네임(익명)"
            register={register("id", idOption)}
          />
          <ErrorMessage message={id?.message} />

          <input
            type="password"
            placeholder="비밀번호"
            maxLength="11"
            autoComplete="current-passowrd"
            {...register("password", {
              validate: {
                whiteSpace: (value) => !isWhiteSpaceCheck(value),
              },
              required: true,
              maxLength: 10,
              minLength: 4,
            })}
          />
          <Errors>
            {errors.password?.type === "maxLength" && "* 최대 10자 입니다."}
            {errors.password?.type === "minLength" && "* 최소 4자 이상입니다."}
            {errors.password?.type === "required" &&
              "* 비밀번호는 필수 입니다."}
            {errors.password?.type === "whiteSpace" && "* 공백이 들어갔습니다."}
          </Errors>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              {...register("man")}
              checked={genderState.man}
              onChange={handleGanderChange}
            />
            <span>👨‍🦲</span>
          </label>
          <label>
            <input
              type="checkbox"
              {...register("girl")}
              checked={genderState.girl}
              onChange={handleGanderChange}
            />
            <span>👧</span>
          </label>
        </div>
      </div>
      <Editt
        register={register("textArea", getTextAreaOption())}
        error={textArea}
        editWatch={textAreaWatch}
      />
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
                if (
                  extension === "jpeg" ||
                  extension === "png" ||
                  extension === "gif"
                ) {
                  return true;
                }
                return false;
              },
            },
          })}
          onChange={handleFileChange}
        />
      </div>
      {/* <Errors>
        {errors.file?.type === "check" && "* jpeg png gif만 가능합니다."}
      </Errors> */}
    </CustomForm>
  );
};

const CustomForm = styled(Form)`
  & > div {
    &:first-child {
      display: flex;
      padding: 1rem 0;
      flex-wrap: wrap;
      gap: 10px;
      /* flex-direction: column; */

      & > div {
        flex: 1;
        &:first-child {
          display: flex;
          flex-direction: column;
          gap: 10px;

          /* flex-direction: column; */

          input {
            padding: 0.3rem;
            font-weight: bold;
            letter-spacing: 0.1rem;
            border-radius: 5px;
            border: 0;
            box-shadow: 0 0 2px rgba(149, 165, 166, 1);
            font-size: 0.8rem;

            &:auto {
              background-color: #fff;
            }

            &::-webkit-input-placeholder {
              color: rgb(187, 187, 187);
              opacity: 1;
              transition: 0.5s;
            }

            &:focus::-webkit-input-placeholder {
              opacity: 0;
            }
          }
        }

        &:last-child {
          justify-content: flex-end;
          align-items: center;
          display: flex;
          label {
            align-items: center;
            display: flex;
            cursor: pointer;
            vertical-align: middle;
          }
          input {
            width: 1rem;
            height: 1rem;
            display: none;
            &:first-child:checked ~ span {
              background-color: rgba(46, 204, 113, 1);
              border-radius: 20px;
              box-shadow: 0 0 2px rgba(149, 165, 166, 1);
            }
          }
          span {
            padding: 0.2rem;
            padding-bottom: 4px;
          }
        }
      }
    }

    &:nth-child(3) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;

      input[type="text"] {
        display: inline-block;
        height: 3rem;
        padding: 0 10px;
        vertical-align: middle;
        border: 1px solid #dddddd;
        flex: 1;
        color: #999999;
        background-color: #fff;
        border-radius: 5px;
      }
      label {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        color: #fff;
        vertical-align: middle;
        background-color: #999999;
        cursor: pointer;
        height: 3rem;
        border-radius: 5px;
        background-color: rgba(46, 204, 113, 1);
        transition: 0.5s background-color;
        &:hover {
          background-color: rgba(46, 204, 113, 0.5);
        }
      }

      input[type="file"] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
      }
    }
  }
`;

export const Errors = styled.span`
  color: red !important;
  font-size: 0.8rem !important;
`;

export default memo(withLoading(BoardForm));
