import React from "react";
import { StyledMaxWidth } from "style/Styled";
import { Container, LayOut, Empty } from "style/boards/Boards.styled";
import Form from "./Form";
import Board from "./Board";
import Loading from "components/common/Loading";

const Boards = ({
  handleBoardsSubmit,
  boards,
  observer,
  openUpdateModal,
  removeBoard,
  isLoading,
}) => {
  return (
    <StyledMaxWidth>
      <Loading loading={isLoading} />
      <Container radius={boards.length}>
        <section>
          <LayOut>
            <div>
              <span>게시글 {boards?.length}</span>
            </div>
            <Form handleBoardsSubmit={handleBoardsSubmit} />
          </LayOut>
          <LayOut>
            {boards?.length ? (
              boards.map((board) => (
                <Board
                  key={board.boardsId}
                  board={board}
                  openUpdateModal={openUpdateModal}
                  removeBoard={removeBoard}
                />
              ))
            ) : (
              <Empty>게시글이 없습니다.</Empty>
            )}
            <div ref={observer} />
          </LayOut>
        </section>
      </Container>
    </StyledMaxWidth>
  );
};

export default Boards;
