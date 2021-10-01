import React, { useCallback } from "react";
import { Mobal, Fiexd } from "style/boards/UpdateModal.styled";
import PropTypes from "prop-types";

const UpdateModal = ({ updateModalShow, setUpdateModalShow, modifyBoard }) => {
  const currentBoard = updateModalShow.data ?? {};
  const cancel = useCallback(
    () => setUpdateModalShow({ visible: false, data: null }),
    [setUpdateModalShow]
  );

  return (
    <Fiexd visible={updateModalShow.visible}>
      <Mobal visible={updateModalShow.visible}>
        <form onSubmit={modifyBoard(currentBoard.boardsId)}>
          <header>
            <h1>댓글 수정</h1>
          </header>
          <main>
            <section>
              <div>작성자 : {currentBoard.createId}</div>
              <div>
                비밀번호 <input type="password" name="password" defaultValue="" />
              </div>
              <textarea name="updateBody" defaultValue={currentBoard.body} />
            </section>
          </main>
          <footer>
            <div>
              <button type="submit">수 정</button>
              <button type="button" onClick={cancel}>
                취 소
              </button>
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

export default UpdateModal;
