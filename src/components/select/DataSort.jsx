import React, { memo } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import up from "images/up.svg";
import down from "images/down.svg";
import CurrentSort from "./CurrentSort";
import { Row } from "style/Styled";
import { Col } from "style/Styled";
import { makeUrl } from "util/urlUtil";

const StyledDiv = styled.div`
  margin-top: 10px;
`;
const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

const CustomLink = styled(Link)`
  color: #fff;
  background-color: rgba(46, 204, 113, 1);
  border-radius: 5px;
  display: inline-block;
  box-shadow: 3px 3px 5px rgb(127 140 141 / 50%);
  span {
    padding: 5px 10px;
    display: inline-block;
  }
  .img {
    width: 25px;
    height: 18px;
    background-size: cover;
    ${({ position }) => {
      return position === "asc"
        ? css`
            background-image: url(${up});
          `
        : css`
            background-image: url(${down});
          `;
    }}
  }
`;

const DataSort = ({ pathname, currentQuery, text, isCategory }) => {
  const { date, price, insertDate, category } = currentQuery;
  const lgSizeArray = [1, isCategory ? 3 : 3, isCategory ? 2 : 2, isCategory ? 2 : 0, 2];

  return (
    <StyledDiv>
      <CurrentSort pathname={pathname} currentQuery={currentQuery} text={text} />
      <Row addStyle={{ margin: "10px 0" }}>
        <Col lg={lgSizeArray[0]}>
          <InnerDiv>
            <span>글 번호</span>
          </InnerDiv>
        </Col>
        <Col lg={lgSizeArray[1]}>
          <InnerDiv>
            <span>{text.date}</span>
            {date && date === "asc" ? (
              <CustomLink to={`${makeUrl(pathname, currentQuery, { date: "desc" })}`} position={date}>
                <span className="img"></span>
              </CustomLink>
            ) : (
              <CustomLink to={`${makeUrl(pathname, currentQuery, { date: "asc" })}`} position={date}>
                <span className="img"></span>
              </CustomLink>
            )}
          </InnerDiv>
        </Col>
        <Col lg={lgSizeArray[2]}>
          <InnerDiv>
            <span>{text.price}</span>
            {price && price === "asc" ? (
              <CustomLink to={`${makeUrl(pathname, currentQuery, { price: "desc" })}`} position={price}>
                <span className="img"></span>
              </CustomLink>
            ) : (
              <CustomLink to={`${makeUrl(pathname, currentQuery, { price: "asc" })}`} position={price}>
                <span className="img"></span>
              </CustomLink>
            )}
          </InnerDiv>
        </Col>

        {isCategory && (
          <Col lg={lgSizeArray[3]}>
            <InnerDiv>
              <span>{text.category}</span>
              {category && category === "asc" ? (
                <CustomLink to={`${makeUrl(pathname, currentQuery, { category: "desc" })}`} position={category}>
                  <span className="img"></span>
                </CustomLink>
              ) : (
                <CustomLink to={`${makeUrl(pathname, currentQuery, { category: "asc" })}`} position={category}>
                  <span className="img"></span>
                </CustomLink>
              )}
            </InnerDiv>
          </Col>
        )}

        <Col lg={lgSizeArray[4]}>
          <InnerDiv>
            <span>{text.insertDate}</span>
            {insertDate && insertDate === "asc" ? (
              <CustomLink to={`${makeUrl(pathname, currentQuery, { insertDate: "desc" })}`} position={insertDate}>
                <span className="img"></span>
              </CustomLink>
            ) : (
              <CustomLink to={`${makeUrl(pathname, currentQuery, { insertDate: "asc" })}`} position={insertDate}>
                <span className="img"></span>
              </CustomLink>
            )}
          </InnerDiv>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default memo(DataSort);
