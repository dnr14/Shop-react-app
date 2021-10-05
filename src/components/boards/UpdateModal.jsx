import React, { memo, useCallback, useEffect } from "react";
import { Mobal, Fiexd, Cancel } from "style/boards/UpdateModal.styled";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { isWhiteSpaceCheck } from "utils/Validation";
import { Errors } from "style/boards/Form.styled";
import { getNewlineCount as textUtile } from "utils/TextUtil";

const UpdateModal = ({ updateModalShow, setUpdateModalShow, modifyBoard }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const getNewlineCount = useCallback((body) => textUtile(body), []);
  const currentBoard = updateModalShow.data ?? {};

  const cancel = useCallback(() => {
    reset();
    setUpdateModalShow({ visible: false, data: null });
  }, [setUpdateModalShow, reset]);

  // 모달창 활성화 시 스크롤 고정
  useEffect(() => {
    if (updateModalShow.data !== null) {
      document.body.style.cssText = `
        overflow-y: hidden;
        `;
    }
    return () => {
      document.body.style.cssText = "";
    };
  }, [updateModalShow]);

  return (
    <Fiexd visible={updateModalShow.visible}>
      <Mobal visible={updateModalShow.visible}>
        <form onSubmit={handleSubmit(modifyBoard(currentBoard.boardsId, reset))}>
          <header>
            <h1>댓글 수정</h1>
            <Cancel>
              <div onClick={cancel}>
                <span></span>
                <span></span>
              </div>
            </Cancel>
          </header>
          <main>
            <section>
              <div>
                <span>작성자</span>
                <span>{currentBoard.createId}</span>
              </div>
              <div>
                <span>비밀번호</span>
                <input
                  type="password"
                  autoComplete="current-passowrd"
                  maxLength="12"
                  placeholder="비밀번호"
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
                  {errors.password?.type === "whiteSpaceCheck" &&
                    "* 공백이 들어갔습니다."}
                </Errors>
              </div>
              <div>
                <textarea
                  placeholder="수정 할 내용을 입력하세요."
                  defaultValue={currentBoard.body}
                  {...register("updateBody", {
                    validate: {
                      zero: (value) => value.length !== 0,
                      newlineLimit: (value) => getNewlineCount(value ?? "") <= 15,
                    },
                    require: true,
                    maxLength: 300,
                    minLength: 4,
                  })}
                />
                <span>{watch("updateBody") ? watch("updateBody").length : 0} / 300</span>
                <span>줄바꿈 {getNewlineCount(watch("updateBody") ?? "")}</span>
                <Errors>
                  {errors.updateBody?.type === "required" && "* 내용은 필수 입니다."}
                  {errors.updateBody?.type === "maxLength" && "* 최대 300자 이하 입니다."}
                  {errors.updateBody?.type === "minLength" && "* 최소 4자 이상 입니다."}
                  {errors.updateBody?.type === "zero" && "* 최소 4자 이상 입니다."}
                  {errors.updateBody?.type === "newlineLimit" &&
                    "* 줄바꿈은 최대 15번 입니다. "}
                </Errors>
              </div>
            </section>
          </main>
          <footer>
            <div>
              <button type="submit">수 정</button>
            </div>
          </footer>
        </form>
      </Mobal>
    </Fiexd>
  );
};

UpdateModal.propTypes = {
  updateModalShow: PropTypes.object,
  setUpdateModalShow: PropTypes.func,
};
UpdateModal.defaultProps = {
  updateModalShow: { visiblae: false, data: null },
  setUpdateModalShow: () => {
    throw new Error("모달을 닫는 함수가 없습니다.");
  },
};

export default memo(UpdateModal);
