import Boards from "components/boards/Boards";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as boardsApi from "axios/api/boards";
import axios from "axios";

const BoardsContainer = () => {
  const [boards, setBorders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef();
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
          setBorders((prev) => [...prev, ...response.data.boards]);
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
      setIsLoading((prev) => !prev);
      const response = await boardsApi.createBoard(formData);
      setIsLoading((prev) => !prev);
      setBorders((prev) => [response.data.result, ...prev]);
    } catch (error) {
      throw error;
    }
  }, []);

  // 첫 마운팅 후 통신
  useEffect(() => {
    (async () => {
      try {
        setIsLoading((prev) => !prev);
        const response = await boardsApi.getBoards();
        await preImgLoading(response.data.boards);
        setIsLoading((prev) => !prev);
        setBorders(response.data.boards);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [preImgLoading]);

  const modifyBoard = useCallback((id) => (e) => {}, []);
  const removeBoard = useCallback(
    (id) => () => {
      const pwd = prompt("비밀번호를 입력하세요.");
      if (pwd) {
        setIsLoading((prev) => !prev);
        axios
          .delete(`/api/boards/${id}`, {
            data: { password: pwd },
          })
          .then((response) => {
            setIsLoading((prev) => !prev);
            setBorders((prev) =>
              prev.filter((board) => board.boardsId !== response.data.board.boardsId)
            );
          })
          .catch((error) => {
            alert(error.response.data.message);
            setIsLoading((prev) => !prev);
          });
      }
    },
    []
  );

  return (
    <>
      <Boards
        handleBorderSubmit={handleBorderSubmit}
        modifyBoard={modifyBoard}
        removeBoard={removeBoard}
        observer={observer}
        boards={boards}
        isLoading={isLoading}
      />
    </>
  );
};

export default BoardsContainer;
