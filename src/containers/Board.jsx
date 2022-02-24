import styled, { css } from "styled-components";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Modal from "components/board/Modal";
import {
  getAddBoard,
  getBoardDelete,
  getBoards,
  getBoardUpdate,
  getMoreBoards,
} from "api/boards";
import Item from "components/board/Item";
import { tab } from "assets/style/GlobalStyled";
import { mobile } from "assets/style/GlobalStyled";
import BoardForm from "components/board/BoardForm";

const MODAL_INIT = {
  visible: false,
  data: null,
};

const Board = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState(MODAL_INIT);
  const observerRef = useRef();
  const lastRef = useRef(false);

  const preImgLoading = useCallback(
    async (boards) =>
      boards.forEach(
        (board) => board.fileName && (new Image().src = board.fileName)
      ),
    []
  );

  const observer = (node) => {
    if (node === null || node === undefined || lastRef.current === true) return;
    if (observerRef.current) observerRef.current.disconnect();
    let timer;
    const observerCallback = ([entry], observer) => {
      // 첫 랜더 후 api 통해 borders를 가져오기 전에 타겟에 접근 했다면 실행 x
      if (timer) clearTimeout(timer);
      if (entry.isIntersecting && boards.length !== 0) {
        //서버에게 자주 호출하는 걸 방지 하기 위해  디바운스
        const hasMore = async () => {
          const { boardsId } = boards[boards.length - 1];
          const response = await getMoreBoards(boardsId);
          await preImgLoading(response.data.boards);
          // 게시판 끝까지 왔으면 구독 해제 더 이상 서버에 요청 x
          if (response.data.boards.length === 0) {
            lastRef.current = true;
            return observer.unobserve(entry.target);
          }
          setBoards((prevBoards) => [...prevBoards, ...response.data.boards]);
        };
        timer = setTimeout(hasMore, 1000);
      }
    };
    observerRef.current = new IntersectionObserver(observerCallback);
    observerRef.current.observe(node);
  };

  // form 데이터 전송
  const handleSubmit = useCallback(
    (reset) => async (data) => {
      try {
        const { id, edit, man, password, file } = data;
        const formData = new FormData();
        formData.append("photo", file[0]);
        formData.append("comment", edit);
        formData.append("id", id);
        formData.append("password", password);
        formData.append("gender", man === true ? 0 : 1);
        setLoading(true);
        const response = await getAddBoard(formData);
        setBoards((prevBoards) => [response.data.result, ...prevBoards]);
      } catch (error) {
        alert(error.response.data.message);
      } finally {
        setLoading(false);
        reset();
      }
    },
    []
  );

  const openUpdateModal = useCallback(
    (boardsId) => () => {
      const [currentBoard] = boards.filter(
        (board) => board.boardsId === boardsId
      );
      setModalState((prev) => ({
        ...prev,
        visible: !prev.visible,
        data: currentBoard,
      }));
    },
    [boards]
  );

  const handleBoardDelete = useCallback(
    (id) => async () => {
      const pwd = prompt("비밀번호를 입력하세요.");
      if (pwd === null || pwd === undefined) return;
      try {
        setLoading(true);
        const { data } = await getBoardDelete(id, pwd);
        console.log(data);
        setBoards((prevBoards) =>
          prevBoards.filter(({ boardsId }) => boardsId !== data.board.boardsId)
        );
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleBoardUpdate = useCallback(
    (id, reset) =>
      async ({ textArea, password }) => {
        setLoading(true);
        try {
          const { data } = await getBoardUpdate(id, textArea, password);
          if (!data?.board) {
            throw new Error("서버에서 데이터를 못받아왔습니다.");
          }
          setBoards((prev) =>
            prev.map((board) =>
              board.boardsId === data.board.boardsId ? data.board : board
            )
          );
          setModalState(MODAL_INIT);
        } catch (error) {
          alert(error.message);
        } finally {
          reset();
          setLoading(false);
        }
      },
    []
  );

  // 첫 마운팅 후 통신
  useEffect(() => {
    (async () => {
      try {
        setLoading((prev) => !prev);
        const response = await getBoards();
        await preImgLoading(response.data.boards);
        setBoards(response.data.boards);
      } catch (error) {
        alert(error.response?.data?.message);
      } finally {
        setLoading((prev) => !prev);
      }
    })();
  }, [preImgLoading]);

  const render = boards.length ? (
    boards.map((board) => (
      <Item
        key={board.boardsId}
        board={board}
        openUpdateModal={openUpdateModal}
        removeBoard={handleBoardDelete}
      />
    ))
  ) : (
    <Empty>게시글이 없습니다.</Empty>
  );

  return (
    <Wrapper radius={boards.length}>
      <BoardTitle> 게시글 {boards?.length}</BoardTitle>
      <BoardForm handleBoardsSubmit={handleSubmit} loading={loading} />
      {render}
      <div ref={observer} />
      <Modal
        modalState={modalState}
        setModalState={setModalState}
        handleBoardUpdate={handleBoardUpdate}
      />
    </Wrapper>
  );
};
{
  /* <Boards
  handleBoardsSubmit={handleSubmit}
  openUpdateModal={openUpdateModal}
  removeBoard={handleBoardDelete}
  observer={observer}
  boards={boards}
  isLoading={loading}
/> */
}

const Wrapper = styled.article`
  padding: 0.5rem;
  width: 70%;
  margin: 0 auto;
  background-color: rgba(149, 165, 166, 0.1);
  box-shadow: 1px 1px 1px rgba(00, 00, 00, 0.1);
  border-left: 1px solid rgba(00, 00, 00, 0.1);
  ${tab} {
    width: 85%;
  }
  ${mobile} {
    width: 95%;
  }

  ${({ radius }) =>
    radius.length === 0 &&
    css`
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `}
`;

const BoardTitle = styled.p`
  margin: 0;
`;

const Empty = styled.div`
  padding: 1rem;
  text-align: center;
  letter-spacing: 0.3rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

export default Board;
