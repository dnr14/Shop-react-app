import Boards from "components/boards/Boards";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as boardsApi from "axios/api/boards";
import UpdateModal from "components/boards/UpdateModal";

const BoardsContainer = () => {
  const [boards, setBoards] = useState([]);
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
      // 첫 랜더 후 api 통해 borders를 가져오기 전에 타겟에 접근 했다면 실행 x
      if (entry.isIntersecting && boards.length !== 0) {
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

  // form 데이터 전송
  const handleBoardsSubmit = useCallback(
    (reset) => async (data) => {
      try {
        console.log(data);
        const { id, edit, man, password, file } = data;
        const formData = new FormData();
        formData.append("photo", file[0]);
        formData.append("comment", edit);
        formData.append("id", id);
        formData.append("password", password);
        formData.append("gender", man === true ? 0 : 1);
        setIsLoading((prevIsLoading) => !prevIsLoading);
        const response = await boardsApi.createBoard(formData);
        setBoards((prevBoards) => [response.data.result, ...prevBoards]);
      } catch (error) {
        alert(error.response.data.message);
      } finally {
        setIsLoading((prevIsLoading) => !prevIsLoading);
        reset();
      }
    },
    []
  );

  // 첫 마운팅 후 통신
  useEffect(() => {
    (async () => {
      try {
        setIsLoading((prev) => !prev);
        const response = await boardsApi.getBoards();
        await preImgLoading(response.data.boards);
        setBoards(response.data.boards);
      } catch (error) {
        alert(error.response?.data?.message);
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
      if (pwd !== null || pwd !== undefined) {
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
            alert(error.data.message);
          } finally {
            setIsLoading((prevIsLoading) => !prevIsLoading);
          }
        })();
      }
    },
    []
  );

  const modifyBoard = useCallback(
    (boardsId, reset) => async (data) => {
      setIsLoading((prevIsLoading) => !prevIsLoading);
      try {
        const { updateBody, password } = data;
        const response = await boardsApi.modifyBoard(boardsId, updateBody, password);
        if (!response.data?.board) throw new Error("서버에서 데이터를 못받아왔습니다.");
        const updateBoard = response.data.board;
        setBoards((prevBoards) =>
          prevBoards.map((board) =>
            board.boardsId === updateBoard.boardsId ? updateBoard : board
          )
        );
        reset();
        setUpdateModalShow({ visible: false, data: null });
      } catch (error) {
        alert(error.data.message);
      } finally {
        setIsLoading((prevIsLoading) => !prevIsLoading);
      }
    },
    []
  );
  return (
    <>
      <Boards
        handleBoardsSubmit={handleBoardsSubmit}
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
