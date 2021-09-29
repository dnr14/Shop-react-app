import React, { memo } from "react";
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
      span {
        letter-spacing: 0.1rem;
      }
    }
  }

  textarea {
    width: 100%;
    min-height: 100px;
    resize: none;
    background-color: #fff;
    overflow: hidden;
    &:focus {
      outline: none;
    }
  }
`;

const Border = ({ border }) => {
  function a(body) {
    const regex = /(\\r|\\n|\r|\n)/g;
    let count = 0;
    while (1) {
      const result = regex.exec(body);
      if (result === null) break;
      count += 1;
    }

    return count;
  }
  console.log(a(border.body));

  return (
    <StyledDiv>
      <div>
        <div>
          닉네임 <span>{border.createId}</span>
        </div>
        <div>
          작성시간 : <span>{border.createAt}</span>
        </div>
      </div>
      <div>
        <textarea defaultValue={border.body} rows={a(border.body)} disabled readOnly />
      </div>
      <div>{border.originalFileName} </div>
      {border?.fileName && (
        <div style={{ textAlign: "center" }}>
          <img
            src={`http://localhost:5000/public/${border.fileName}`}
            alt="img"
            style={{ width: "50%", height: "200px" }}
          />
        </div>
      )}
    </StyledDiv>
  );
};

export default memo(Border);
