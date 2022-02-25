import styled, { css } from "styled-components";

import React, { useCallback, useEffect, useRef, useState } from "react";
import BoardModal from "components/BoardModal";
import {
  getAddBoard,
  getBoardDelete,
  getBoards,
  getBoardUpdate,
  getMoreBoards,
} from "api/boards";
import Item from "components/Item";
import { tab } from "assets/style/GlobalStyled";
import { mobile } from "assets/style/GlobalStyled";
import BoardForm from "components/BoardForm";
import { getBoxShadow2 } from "assets/style/GlobalStyled";
import Empty from "components/common/Empty";

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
  const debounce = useRef(null);

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
    const observerCallback = ([entry], observer) => {
      // 첫 랜더 후 api 통해 boards를 가져오기 전에 타겟에 접근 했다면 실행 x
      if (debounce.current) clearTimeout(debounce.current);
      if (entry.isIntersecting && boards.length !== 0) {
        setLoading(true);
        //서버에게 자주 호출하는 걸 방지 하기 위해  디바운스
        const hasMore = async () => {
          const { boardsId } = boards[boards.length - 1];
          const { data } = await getMoreBoards(boardsId);
          await preImgLoading(data.boards);
          // 게시판 끝까지 왔으면 구독 해제 더 이상 서버에 요청 x
          if (data.boards.length === 0) {
            lastRef.current = true;
            observer.unobserve(entry.target);
          }
          setLoading(false);
          setBoards((prev) => [...prev, ...data.boards]);
        };
        debounce.current = setTimeout(hasMore, 1000);
      }
    };
    observerRef.current = new IntersectionObserver(observerCallback);
    observerRef.current.observe(node);
  };

  const handleSubmit = useCallback(
    (reset) =>
      async ({ id, textArea, man, password, file }) => {
        try {
          setLoading(true);
          const formData = new FormData();
          formData.append("id", id);
          formData.append("photo", file[0]);
          formData.append("comment", textArea);
          formData.append("password", password);
          formData.append("gender", man === true ? 0 : 1);
          const { data } = await getAddBoard(formData);
          setBoards((prev) => [data.result, ...prev]);
        } catch (error) {
          alert(error.message);
        } finally {
          setLoading(false);
          reset();
        }
      },
    []
  );

  const handleModalOpen = useCallback(
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
        setBoards((prev) =>
          prev.filter(({ boardsId }) => boardsId !== data.board.boardsId)
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
    const fetch = async () => {
      try {
        setLoading(true);
        const { data } = await getBoards();
        await preImgLoading(data.boards);
        setBoards(data.boards);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [preImgLoading]);

  const render = boards.length ? (
    boards.map((board) => (
      <Item
        key={board.boardsId}
        board={board}
        handleModalOpen={handleModalOpen}
        handleBoardDelete={handleBoardDelete}
      />
    ))
  ) : (
    <Empty text="게시글이 없습니다." />
  );

  return (
    <Wrapper radius={boards.length}>
      <BoardTitle> 게시글 {boards?.length}</BoardTitle>
      <BoardForm handleBoardsSubmit={handleSubmit} loading={loading} />
      {render}
      <div ref={observer} />
      <BoardModal
        modalState={modalState}
        setModalState={setModalState}
        handleBoardUpdate={handleBoardUpdate}
      />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem 0.5rem;
  width: 70%;
  margin: 0 auto;
  background-color: rgba(149, 165, 166, 0.1);
  ${getBoxShadow2}
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

export default Board;
