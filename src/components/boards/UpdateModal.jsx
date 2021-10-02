import React, { memo, useCallback, useEffect, useRef } from "react";
import { Mobal, Fiexd, Cancel } from "style/boards/UpdateModal.styled";
import PropTypes from "prop-types";

const UpdateModal = ({ updateModalShow, setUpdateModalShow, modifyBoard }) => {
  const currentBoard = updateModalShow.data ?? {};
  const pwdRef = useRef(null);
  const textRef = useRef(null);
  const cancel = useCallback(() => {
    pwdRef.current.value = "";
    setUpdateModalShow({ visible: false, data: null });
  }, [setUpdateModalShow]);

  useEffect(() => {
    textRef.current.value = currentBoard.body ?? "";
  }, [currentBoard.body]);

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
        <form onSubmit={modifyBoard(currentBoard.boardsId)}>
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
                  name="password"
                  ref={pwdRef}
                  autoComplete="current-passowrd"
                  placeholder="비밀번호"
                />
              </div>
              <div>
                <textarea
                  name="updateBody"
                  placeholder="수정 할 내용을 입력하세요."
                  ref={textRef}
                />
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
