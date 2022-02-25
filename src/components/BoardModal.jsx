import React, { memo, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { getFlex } from "assets/style/GlobalStyled";
import Form from "components/common/Form";
import { getBackGroundWhiteColor1 } from "assets/style/GlobalStyled";
import { getBoxShadow2 } from "assets/style/GlobalStyled";
import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import Input from "components/common/Input";
import Label from "components/common/Label";
import Button from "components/common/Button";
import { getBackGroundRedColor1 } from "assets/style/GlobalStyled";
import ErrorMessage from "components/common/ErrorMessage";
import Editt from "components/common/Edit";
import { getPasswordOption, getTextAreaOption } from "utils/hookFormUtil";

const BoardModal = ({ modalState, setModalState, handleBoardUpdate }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const { password, textArea } = errors;
  const { data, visible } = modalState;
  const currentBoard = data ?? {};
  const textAreaWatch = watch("textArea");

  const handleCancel = useCallback(() => {
    reset();
    setModalState({ visible: false, data: null });
  }, [setModalState, reset]);

  // 모달창 활성화 시 스크롤 고정
  useEffect(() => {
    if (data !== null) {
      document.body.style.cssText = `
        overflow-y: hidden;
        `;
    }
    return () => {
      document.body.style.cssText = "";
    };
  }, [data]);

  return (
    <ModalWrapper visible={visible}>
      <MobalInnerWrapper visible={visible}>
        <Form onSubmit={handleSubmit(handleBoardUpdate(currentBoard.boardsId, reset))}>
          <ModalHeader>수정하기</ModalHeader>
          <main>
            <p>작성자 {currentBoard.createId}</p>
            <div>
              <Label text="비밀번호" />
              <Input
                name="password"
                type="password"
                autoComplete="current-passowrd"
                placeholder="비밀번호를 입력하세요."
                register={register("password", getPasswordOption())}
              />
              <ErrorMessage message={password?.message} margin="0" />
            </div>
            <Editt
              body={currentBoard.body}
              register={register("textArea", getTextAreaOption())}
              error={textArea}
              editWatch={textAreaWatch}
            />
          </main>
          <ModalFooter>
            <Button text="수정" type="submit" width="50%" />
            <Button text="닫기" width="50%" onClick={handleCancel} />
          </ModalFooter>
        </Form>
      </MobalInnerWrapper>
    </ModalWrapper>
  );
};

BoardModal.propTypes = {
  modalState: PropTypes.object,
  setModalState: PropTypes.func,
};
BoardModal.defaultProps = {
  modalState: { visiblae: false, data: null },
  setModalState: () => {
    throw new Error("모달을 닫는 함수가 없습니다.");
  },
};

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(149, 165, 166, 0.5);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease-in;
  ${getFlex("center", "center")}

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
      z-index: 1;
    `}
`;

const MobalInnerWrapper = styled.div`
  height: auto;
  padding: 0 1rem;
  width: 500px;
  border-radius: 5px;
  transform: translateY(100px);
  transition: transform 0.8s ease-in;
  ${getBackGroundWhiteColor1}
  ${getBoxShadow2}

  ${({ visible }) =>
    visible &&
    css`
      transform: translateY(0px);
    `}
  
  label {
    text-align: left;
    margin-bottom: 10px;
  }
  p {
    margin: 5px 0;
  }

  div {
    padding: 0.5rem 0;
  }
`;

const ModalHeader = styled.header`
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 15px;
  ${getWhiteColor1}
  ${getBackGroundBrandColor1}
`;

const ModalFooter = styled.footer`
  ${getFlex()}
  gap:5px;
  margin-top: 5px;
  button:last-child {
    ${getBackGroundRedColor1}
  }
`;

export default memo(BoardModal);
