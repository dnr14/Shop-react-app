import React, { memo, useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "components/common/Form";
import styled from "styled-components";
import withLoading from "hoc/withLoading";
import Editt from "components/common/Edit";
import { getFileOption, getIdOption, getPasswordOption, getTextAreaOption } from "utils/hookFormUtil";
import Input from "components/common/Input";
import ErrorMessage from "components/common/ErrorMessage";
import Button from "components/common/Button";
import { getFlex } from "assets/style/GlobalStyled";
import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow2 } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import { getBackGroundWhiteColor1 } from "assets/style/GlobalStyled";

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
  const { password, file, textArea, id } = errors;

  const handleFileChange = useCallback(e => (inputRef.current.value = e.target.value), []);

  const handleGanderChange = e => {
    if (e.target.name === "girl") {
      setGender(prev =>
        prev.girl === true
          ? prev
          : {
              man: false,
              girl: true,
            },
      );
    } else {
      setGender(prev =>
        prev.man === true
          ? prev
          : {
              man: true,
              girl: false,
            },
      );
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleBoardsSubmit(reset))}>
      <GenderWrapper>
        <Gender>
          <input type="checkbox" {...register("man")} checked={genderState.man} onChange={handleGanderChange} />
          <span>👨‍🦲</span>
        </Gender>
        <Gender>
          <input type="checkbox" {...register("girl")} checked={genderState.girl} onChange={handleGanderChange} />
          <span>👧</span>
        </Gender>
      </GenderWrapper>
      <InnerWrapper>
        <InputWrapper>
          <Input
            type="text"
            name="id"
            placeholder="닉네임(익명)을 입력하세요."
            register={register("id", getIdOption())}
          />
          <ErrorMessage message={id?.message} />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요."
            register={register("password", getPasswordOption())}
          />
          <ErrorMessage message={password?.message} />
        </InputWrapper>
      </InnerWrapper>
      <EditWrapper>
        <Editt register={register("textArea", getTextAreaOption())} error={textArea} editWatch={textAreaWatch} />
        <Button text="등록" type="submit" />
      </EditWrapper>
      <FileWrapper>
        <File type="text" ref={inputRef} placeholder="첨부파일" disabled />
        <label htmlFor="file">파일찾기</label>
        <Input
          type="file"
          id="file"
          placeholder="비밀번호를 입력하세요."
          register={register("file", getFileOption())}
          onChange={handleFileChange}
        />
      </FileWrapper>
      <ErrorMessage message={file?.message} />
    </Form>
  );
};
const InnerWrapper = styled.div`
  ${getFlex()}
  gap:10px;
`;

const InputWrapper = styled.div`
  display: inline-block;
  width: 50%;
  gap: 5px;
  margin: 10px 0;
`;
const Gender = styled.label`
  input {
    display: none;
  }
  input:checked ~ span {
    ${getBackGroundBrandColor1}
    ${getBoxShadow2}
  }
  span {
    ${getFlex("center", "center")}
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
  }
`;

const GenderWrapper = styled.div`
  ${getFlex("flex-end")}
`;

const FileWrapper = styled.div`
  ${getFlex("space-between")};
  gap: 10px;
  margin: 10px 0;

  label {
    ${getFlex("", "center")};
    padding: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    ${getWhiteColor1}
    ${getBackGroundBrandColor1}
  }

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;

const File = styled.input`
  height: 3rem;
  padding: 0 10px;
  flex: 1;
  border: none;
  border-radius: 5px;
  ${getBackGroundWhiteColor1}
  ${getBoxShadow2}
`;

const EditWrapper = styled.div`
  position: relative;
  button {
    position: absolute;
    bottom: 15%;
    right: 2%;
    width: 70px;
  }
`;

export default memo(withLoading(BoardForm));
