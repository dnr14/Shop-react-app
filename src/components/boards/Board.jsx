import React, { memo, useCallback } from "react";
import { StyledDiv } from "style/boards/Board.styled";
import { getNewlineCount as textUtile } from "utils/TextUtil";

const Board = ({ board, removeBoard, openUpdateModal }) => {
  const getNewlineCount = useCallback((body) => textUtile(body), []);
  const dateFormatChange = useCallback((data) => {
    let newData = `${data}초`;
    while (true) {
      const yyyymmdd_index = newData.indexOf(".");
      const hhmmss_index = newData.indexOf(":");
      if (yyyymmdd_index === -1) break;
      if (yyyymmdd_index === 4) newData = newData.replace(".", "년");
      if (yyyymmdd_index === 8) newData = newData.replace(".", "월");
      if (yyyymmdd_index === 11) newData = newData.replace(".", "일");
      if (hhmmss_index === 17) newData = newData.replace(":", `시 `);
      if (hhmmss_index === 21) newData = newData.replace(":", `분 `);
    }
    return newData;
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
          <span>{dateFormatChange(board.createAt)}</span>
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
          <button onClick={openUpdateModal(board.boardsId)}>UPDATE</button>
          <button onClick={removeBoard(board.boardsId)}>DELETE</button>
        </div>
      </div>
      <div>
        <textarea
          value={board.body}
          rows={getNewlineCount(board.body)}
          disabled={true}
          readOnly={true}
        />
      </div>
    </StyledDiv>
  );
};

const ifDifferentRedraw = (prev, next) => prev.board.body === next.board.body;
export default memo(Board, ifDifferentRedraw);
