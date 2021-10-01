import Boards from "components/boards/Boards";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as boardsApi from "axios/api/boards";
import UpdateModal from "components/boards/UpdateModal";

const BoardsContainer = () => {
  const [boards, setBoards] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
  const [updateModalShow, setUpdateModalShow] = useState({
    visible: false,
    data: null,
  });
  const lastRef = useRef(false);

  const preImgLoading = useCallback(
    async (boards) =>
      boards.forEach((board) => board.fileName && (new Image().src = board.fileName)),
    []
  );

  const observer = (node) => {
    if (node === null || node === undefined || lastRef.current === true) return;
    if (observerRef.current) observerRef.current.disconnect();
    let timer;
    const observerCallback = ([entry], observer) => {
      // 첫 랜더 시 borders는 null이다.
      // 첫 랜더 후 api 통해 borders를 가져오기 전에 타겟에 접근 했다면 실행 x
      if (boards === null || boards.length === 0) return;
      if (entry.isIntersecting) {
        //서버에게 자주 호출하는 걸 방지 하기 위해  디바운스
        if (timer) clearTimeout(timer);
        const hasMore = async () => {
          const { boardsId } = boards[boards.length - 1];
          const response = await boardsApi.getMore(boardsId);
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

  const handleBorderSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("photo", e.target.file.files[0]);
      formData.append("comment", e.target.edit.value);
      formData.append("id", e.target.id.value);
      formData.append("password", e.target.password.value);
      formData.append("gender", e.target.man.checked === true ? 0 : 1);
      setIsLoading((prevIsLoading) => !prevIsLoading);
      const response = await boardsApi.createBoard(formData);
      setBoards((prevBoards) => [response.data.result, ...prevBoards]);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setIsLoading((prevIsLoading) => !prevIsLoading);
    }
  }, []);

  // 첫 마운팅 후 통신
  useEffect(() => {
    (async () => {
      try {
        setIsLoading((prev) => !prev);
        const response = await boardsApi.getBoards();
        await preImgLoading(response.data.boards);
        setBoards(response.data.boards);
      } catch (error) {
        alert(error.response.data.message);
      } finally {
        setIsLoading((prev) => !prev);
      }
    })();
  }, [preImgLoading]);

  const openUpdateModal = useCallback(
    (boardsId) => () => {
      const [currentBoard] = boards.filter((board) => board.boardsId === boardsId);
      setUpdateModalShow((prevUpdateModalState) => ({
        ...prevUpdateModalState,
        visible: !prevUpdateModalState.visible,
        data: currentBoard,
      }));
    },
    [boards]
  );

  const removeBoard = useCallback(
    (boardsId) => () => {
      const pwd = prompt("비밀번호를 입력하세요.");
      if (pwd) {
        setIsLoading((prevIsLoading) => !prevIsLoading);
        (async () => {
          try {
            const response = await boardsApi.deleteBoard(boardsId, pwd);
            const currentBoard = response.data.board;
            setBoards((prevBoards) =>
              prevBoards.filter(
                (prevBoard) => prevBoard.boardsId !== currentBoard.boardsId
              )
            );
          } catch (error) {
            alert(error.response.data.message);
          } finally {
            setIsLoading((prevIsLoading) => !prevIsLoading);
          }
        })();
      }
    },
    []
  );

  const modifyBoard = (boardsId) => async (e) => {
    e.preventDefault();
    setIsLoading((prevIsLoading) => !prevIsLoading);
    try {
      const updateBody = e.target.updateBody.value;
      const password = e.target.password.value;
      const response = await boardsApi.modifyBoard(boardsId, updateBody, password);
      const updateBoard = response.data.board;
      setBoards((prevBoards) => {
        const a = prevBoards.map((prevBoard) =>
          prevBoards.boardsId === updateBoard.boardsId ? { ...updateBoard } : prevBoard
        );
        console.log(a);

        return a;
      });
    } catch (error) {
      alert(error.data.message);
    } finally {
      setIsLoading((prevIsLoading) => !prevIsLoading);
    }
  };

  return (
    <>
      <Boards
        handleBorderSubmit={handleBorderSubmit}
        openUpdateModal={openUpdateModal}
        removeBoard={removeBoard}
        observer={observer}
        boards={boards}
        isLoading={isLoading}
      />
      <UpdateModal
        updateModalShow={updateModalShow}
        setUpdateModalShow={setUpdateModalShow}
        modifyBoard={modifyBoard}
      />
    </>
  );
};

export default BoardsContainer;
