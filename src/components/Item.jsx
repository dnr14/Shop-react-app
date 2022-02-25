import {
  getBrandColor1,
  getBackGroundWhiteColor1,
} from "assets/style/GlobalStyled";
import { getFlex } from "assets/style/GlobalStyled";
import React, { memo } from "react";
import styled from "styled-components";
import { getNewlineCount } from "utils/TextUtil";
import Button from "./common/Button";

const Item = ({ board, handleBoardDelete, handleModalOpen }) => {
  const { createAt, createId, fileName, gender, boardsId, body } = board;
  const imgUrl = `http://localhost:5000/public/${fileName}`;

  return (
    <ItemWrapper>
      {fileName && <ItemImg src={imgUrl} alt="boardImg" />}
      <ItemInformation>
        <div>
          <span>닉네임</span> {createId}
        </div>
        <div>
          <span>작성시간</span> {createAt}
        </div>
      </ItemInformation>
      <ItemButtonsWrapper>
        <div>
          <Gender>성별</Gender>
          <Gender>{gender ? "👧" : "👨‍🦲"}</Gender>
        </div>
        <div>
          <Button text="수정" onClick={handleModalOpen(boardsId)} />
          <Button text="삭제" onClick={handleBoardDelete(boardsId)} />
        </div>
      </ItemButtonsWrapper>
      <ItemTextAreaWrapper>
        <TextArea value={body} rows={getNewlineCount(body)} disabled readOnly />
      </ItemTextAreaWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  padding: 10px 0;
  &:last-child {
    margin-bottom: 2rem;
  }
`;

const ItemInformation = styled.div`
  ${getFlex("space-between")};
  flex-wrap: wrap;
  gap: 5px;
  div {
    ${getFlex("", "center")};
    flex-wrap: wrap;
    gap: 10px;
  }
  span:first-child {
    ${getBrandColor1}
    font-weight: 500;
    font-size: 1rem;
  }
`;

const ItemImg = styled.img`
  padding: 1rem 0;
  max-width: 100%;
  object-fit: cover;
`;

const Gender = styled.span`
  font-size: 1rem;
  ${getBrandColor1}
  & + & {
    ${getFlex("center", "center")}
    display: inline-flex;
    font-size: 1.2rem;
    margin-left: 5px;
    padding: 2.5px;
    ${getBackGroundWhiteColor1};
    border-radius: 50%;
  }
`;

const ItemButtonsWrapper = styled.div`
  ${getFlex("space-between", "center")};
  margin-top: 10px;
  button {
    ${getFlex("center", "center")};
    display: inline-flex;
    width: 75px;
    height: 35px;
  }
  button + button {
    margin-left: 5px;
  }
`;

const ItemTextAreaWrapper = styled.div`
  text-align: center;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 2.3rem;
    width: 0px;
    height: 0px;
    display: inline-block;
    background-color: transparent;
    border-bottom: 1.5rem solid #fff;
    border-right: 1rem solid transparent;
    border-left: 1rem solid transparent;
    border-radius: 5px;
  }
`;

const TextArea = styled.textarea`
  display: inline-block;
  margin-top: 1.1rem;
  width: 94%;
  min-height: 100px;
  resize: none;
  overflow: hidden;
  border-radius: 10px;
  padding: 0.5rem 2.5%;
  box-sizing: content-box;
  ${getBackGroundWhiteColor1}
`;

const ifDifferentRedraw = (prev, next) => prev.body === next.body;
export default memo(Item, ifDifferentRedraw);
