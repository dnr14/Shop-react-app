import React, { memo } from "react";
import {} from "assets/style/GlobalStyled";
import { makeUrl } from "utils/urlUtil";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import up from "assets/images/dropUp.svg";
import SortTag from "./SortTag";
import { getFlex } from "assets/style/GlobalStyled";
import { getBrandColor1 } from "assets/style/GlobalStyled";
import { getGrayColor1 } from "assets/style/GlobalStyled";
import { getBackGroundBrandColor1 } from "assets/style/GlobalStyled";
import { getWhiteColor1 } from "assets/style/GlobalStyled";
import Button from "./Button";
import { useLocation } from "react-router-dom";
import { mobile } from "assets/style/GlobalStyled";

const Sort = ({ currentQuery, text, isCategory, removeRowIds, removeRows }) => {
  const { pathname } = useLocation();
  const { date, price, insertDate, category } = currentQuery;

  const tags = Object.keys(currentQuery).map((key, idx) => {
    if (key === "page") return null;
    return (
      <SortTag
        key={idx}
        path={`${makeUrl(pathname, currentQuery, {
          [`${key}`]: undefined,
        })}`}
        position={currentQuery[`${key}`]}
        text={text[`${key}`]}
      />
    );
  });

  return (
    <SortWrapper>
      <Button
        text="삭제"
        dateSort
        visible={removeRowIds.length ? true : false}
        onClick={removeRows}
      />
      <SortTagsWrapper>{tags}</SortTagsWrapper>
      <Head>
        <InnerWrapper className="first">
          <span>번호</span>
        </InnerWrapper>
        {isCategory && (
          <InnerWrapper>
            <span>{text.category}</span>
            <SortImg
              name="category"
              pathname={pathname}
              position={category}
              currentQuery={currentQuery}
            />
          </InnerWrapper>
        )}
        <InnerWrapper>
          <span>{text.date}</span>
          <SortImg
            name="date"
            pathname={pathname}
            currentQuery={currentQuery}
            position={date}
          />
        </InnerWrapper>
        <InnerWrapper>
          <span>{text.insertDate}</span>
          <SortImg
            name="insertDate"
            pathname={pathname}
            currentQuery={currentQuery}
            position={insertDate}
          />
        </InnerWrapper>
        <InnerWrapper>
          <span>{text.price}</span>
          <SortImg
            name="price"
            pathname={pathname}
            currentQuery={currentQuery}
            position={price}
          />
        </InnerWrapper>
      </Head>
    </SortWrapper>
  );
};

function SortImg({ name, pathname, currentQuery, position }) {
  if (position === "asc") {
    return (
      <CustomLink
        to={`${makeUrl(pathname, currentQuery, { [`${name}`]: "desc" })}`}
        position={position}
      />
    );
  }

  return (
    <CustomLink
      to={`${makeUrl(pathname, currentQuery, { [`${name}`]: "asc" })}`}
      position={position}
    />
  );
}

const SortWrapper = styled.div`
  position: relative;
`;

const Head = styled.div`
  ${getFlex()}
  gap: 5px;
`;

const InnerWrapper = styled.div`
  ${getFlex("space-between", "center")}
  flex-wrap: wrap;
  word-break: keep-all;
  width: 100%;

  &.first {
    width: 150px;
  }

  & > span {
    flex: 1;
    ${getBrandColor1}
    ${getGrayColor1}
    font-size: 18px;
    text-align: center;
    ${mobile} {
      font-size: 15px;
    }
  }
`;

const SortTagsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 15px 0;
  min-height: 2.5rem;
`;

const CustomLink = styled(Link)`
  display: inline-block;
  ${getWhiteColor1}
  ${getBackGroundBrandColor1}
  border-radius: 2px;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-image: url(${up});
  transition: transform 0.35s ease-in;

  ${({ position }) => {
    return position === "asc"
      ? css`
          transform: rotate(0deg);
        `
      : css`
          transform: rotate(180deg);
        `;
  }}
`;

export default memo(Sort);
