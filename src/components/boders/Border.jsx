import React, { memo, useCallback } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 10px 0;
  &:last-child {
    margin-bottom: 2rem;
  }

  & > div {
    &:first-child {
      display: flex;
      justify-content: space-between;
      & > div {
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          letter-spacing: 0.1rem;
          padding: 0.2rem;
          &:first-child {
            color: rgba(46, 204, 113, 1);
            font-weight: bold;
            font-size: 1.2rem;
          }
          &:last-child {
            font-size: 1rem;
            font-weight: bold;
          }
        }
      }
    }

    &:nth-child(2) {
      text-align: center;

      & > img {
        padding: 1rem;
        box-sizing: content-box;
        width: 50%;
        min-height: 200px;
      }
    }
    &:nth-child(3) {
      display: flex;
      & > span {
        display: inline-block;
        padding: 0.5rem 0.2rem;
        color: rgba(46, 204, 113, 1);
        font-weight: bold;
        letter-spacing: 0.2rem;
      }
    }

    &:nth-child(4) {
      text-align: center;
      textarea {
        display: inline-block;
        width: 94%;
        min-height: 100px;
        resize: none;
        background-color: #fff;
        overflow: hidden;
        border-radius: 10px;
        padding: 1rem 2.5%;
        font-weight: bold;
        box-shadow: 2px 2px 2px rgba(44, 62, 80, 0.5);
        box-sizing: content-box;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;

const Border = ({ border }) => {
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
          <span>{border.createId}</span>
        </div>
        <div>
          <span>작성시간 </span>
          <span>{border.createAt}</span>
        </div>
      </div>
      <div>
        {border?.fileName && (
          <img src={`http://localhost:5000/public/${border.fileName}`} alt="img" />
        )}
      </div>
      <div>
        <span>성별 </span>
        <span>{border.gender ? "👧" : "👨‍🦲"}</span>
      </div>
      <div>
        <textarea
          defaultValue={border.body}
          rows={getNewlineCount(border.body)}
          disabled
          readOnly
        />
      </div>
    </StyledDiv>
  );
};

export default memo(Border);
