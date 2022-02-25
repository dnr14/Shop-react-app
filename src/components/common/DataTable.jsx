import React, { memo } from "react";
import { setDateFormat } from "utils/DateUtil";
import { getNumberThreeCommaDraw } from "utils/NumberUtil";
import styled, { css } from "styled-components";
import checkImg from "assets/images/check.svg";
import updateImg from "assets/images/upgrade.svg";
import withLoading from "hoc/withLoading";
import { getFlex } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getBackGroundWhiteColor1 } from "assets/style/GlobalStyled";

const DataTable = ({ visible, datas, isCategory, removeRowsCheckedClick, boardModify }) => {
  return (
    <DataTableWrapper visible={visible}>
      {datas.map(item => (
        <Item
          key={item.id}
          item={item}
          isCategory={isCategory}
          removeRowsCheckedClick={removeRowsCheckedClick}
          boardModify={boardModify}
        />
      ))}
    </DataTableWrapper>
  );
};

const Item = ({ item, boardModify, removeRowsCheckedClick, isCategory }) => {
  const { id, idx, category, date, insertTime, price } = item;

  const labelId = `check${id}`;

  return (
    <CheckBoxWrapper>
      <InnerWrapper className="first">{idx}.</InnerWrapper>
      {isCategory && <InnerWrapper>{category}</InnerWrapper>}
      <InnerWrapper>{setDateFormat(date)}</InnerWrapper>
      <InnerWrapper>{new Date(insertTime).toLocaleString()}</InnerWrapper>
      <InnerWrapper>{getNumberThreeCommaDraw(price)}원</InnerWrapper>
      <AbsoluteWrapper>
        <UpdateImg src={updateImg} alt="updateImg" onClick={boardModify(id)} />
        <CheckBox type="checkbox" id={labelId} onChange={removeRowsCheckedClick(id)} />
        <label htmlFor={labelId} />
      </AbsoluteWrapper>
    </CheckBoxWrapper>
  );
};

const DataTableWrapper = styled.div`
  margin: 15px 0;
  word-break: keep-all;
  opacity: 0;
  min-height: 200px;
  transition: opacity 0.5s ease-in;
  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `}
`;
const InnerWrapper = styled.span`
  text-align: center;
  width: 100%;
  &.first {
    width: 50px;
  }
`;
const CheckBoxWrapper = styled.label`
  min-height: 40px;
  ${getFlex("", "center")};
  gap: 5px;
  cursor: pointer;
  padding: 0.5rem;
  transition: background-color 0.35s;
  position: relative;
  &:hover {
    cursor: pointer;
    ${getBackGroundBrandColor1};
    ${getWhiteColor1};
    border-radius: 2px;
  }
  border-bottom: 1px solid rgba(46, 204, 113, 0.8);
`;

const AbsoluteWrapper = styled.div`
  position: absolute;
  right: 5px;
  ${getFlex("", "center")}
  gap:10px;
`;

const CheckBox = styled.input`
  display: none;

  & + label {
    display: inline-block;
    height: 20px;
    cursor: pointer;
    width: 20px;
    border: 1px solid rgba(46, 204, 113, 0.8);
    ${getBackGroundWhiteColor1};
    transition: 0.35s;
  }

  &:checked + label {
    background-image: url(${checkImg});
    background-size: cover;
  }
`;

const UpdateImg = styled.img`
  z-index: 1;
  &:hover {
    ${getBackGroundWhiteColor1};
    border-radius: 50%;
  }
`;

export default memo(withLoading(DataTable));
