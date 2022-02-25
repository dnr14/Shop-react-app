import { getBoxShadow2, getGrayColor2 } from "assets/style/GlobalStyled";
import ErrorMessage from "components/common/ErrorMessage";
import React from "react";
import styled, { css } from "styled-components";
import { getNewlineCount } from "utils/TextUtil";

const Edit = ({ register, body, editWatch, error }) => {
  return (
    <EditWarpper>
      <TextArea placeholder="내용을 입력하세요." defaultValue={body} {...register} />
      <TextShow>{editWatch?.length} / 300</TextShow>
      <TextShow>줄바꿈 {getNewlineCount(editWatch ?? "")}</TextShow>
      <ErrorMessage message={error?.message} margin="0" />
    </EditWarpper>
  );
};

const EditWarpper = styled.div``;

const textAreaHover = () => css`
  transition: 0.5s;
  &::-webkit-input-placeholder {
    ${getGrayColor2}
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem 1rem;
  resize: none;
  width: 100%;
  min-height: 200px;
  font-size: 0.8rem;
  ${getBoxShadow2}
  border: none;
  ${textAreaHover};
  &:focus {
    outline: none;
  }
`;

const TextShow = styled.span`
  display: inline-block;
  padding-top: 0.5rem;
  font-size: 0.8rem;

  & + & {
    padding-left: 1rem;
  }
`;

export default Edit;
