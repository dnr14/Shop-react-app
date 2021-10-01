import React, { memo, useCallback } from "react";
import { StyledDiv } from "style/boards/Board.styled";

const Board = ({ board, removeBoard, modifyBoard }) => {
  const getNewlineCount = useCallback((body) => {
    const regex = /(\\r|\\n|\r|\n)/g;
    let count = 0;
    while (true) {
      const result = regex.exec(body);
      if (result === null) break;
      count += 1;
    }
    return count;
  }, []);

  return (
    <StyledDiv>
      <div>
        <div>
          <span>닉네임 </span>
          <span>{board.createId}</span>
        </div>
        <div>
          <span>작성시간 </span>
          <span>{board.createAt}</span>
        </div>
      </div>
      <div>
        {board?.fileName && (
          <img src={`http://localhost:5000/public/${board.fileName}`} alt="img" />
        )}
      </div>
      <div>
        <div>
          <span>성별 </span>
          <span>{board.gender ? "👧" : "👨‍🦲"}</span>
        </div>
        <div>
          <button onClick={modifyBoard(board.boardsId)}>UPDATE</button>
          <button onClick={removeBoard(board.boardsId)}>DELETE</button>
        </div>
      </div>
      <div>
        <textarea
          defaultValue={board.body}
          rows={getNewlineCount(board.body)}
          disabled={true}
          readOnly={true}
        />
      </div>
    </StyledDiv>
  );
};

export default memo(Board);
