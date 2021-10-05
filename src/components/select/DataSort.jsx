import React, { memo } from "react";
import CurrentSort from "./CurrentSort";
import { Col, Row } from "style/Styled";
import { makeUrl } from "utils/urlUtil";
import { StyledDiv, InnerDiv, StyledLink } from "style/select/DataSort.styled";

const DataSort = ({ pathname, currentQuery, text, isCategory }) => {
  const { date, price, insertDate, category } = currentQuery;
  const lgSizeArray = isCategory ? [1, 3, 2, 2, 4] : [1, 4, 3, 0, 4];
  // 1 3 2 2 2 true
  // 1 3 2 0 2 false

  return (
    <StyledDiv>
      <CurrentSort pathname={pathname} currentQuery={currentQuery} text={text} />
      <Row addStyle={{ margin: "10px 0" }}>
        <Col
          xs={lgSizeArray[0]}
          sm={lgSizeArray[0]}
          md={lgSizeArray[0]}
          lg={lgSizeArray[0]}
        >
          <InnerDiv>
            <span>글 번호</span>
          </InnerDiv>
        </Col>

        {isCategory && (
          <Col
            xs={lgSizeArray[3]}
            sm={lgSizeArray[3]}
            md={lgSizeArray[3]}
            lg={lgSizeArray[3]}
          >
            <InnerDiv>
              <span>{text.category}</span>
              {category && category === "asc" ? (
                <StyledLink
                  to={`${makeUrl(pathname, currentQuery, { category: "desc" })}`}
                  position={category}
                ></StyledLink>
              ) : (
                <StyledLink
                  to={`${makeUrl(pathname, currentQuery, { category: "asc" })}`}
                  position={category}
                ></StyledLink>
              )}
            </InnerDiv>
          </Col>
        )}
        <Col
          xs={lgSizeArray[1]}
          sm={lgSizeArray[1]}
          md={lgSizeArray[1]}
          lg={lgSizeArray[1]}
        >
          <InnerDiv>
            <span>{text.date}</span>
            {date && date === "asc" ? (
              <StyledLink
                to={`${makeUrl(pathname, currentQuery, { date: "desc" })}`}
                position={date}
              ></StyledLink>
            ) : (
              <StyledLink
                to={`${makeUrl(pathname, currentQuery, { date: "asc" })}`}
                position={date}
              ></StyledLink>
            )}
          </InnerDiv>
        </Col>

        <Col
          xs={lgSizeArray[4]}
          sm={lgSizeArray[4]}
          md={lgSizeArray[4]}
          lg={lgSizeArray[4]}
        >
          <InnerDiv>
            <span>{text.insertDate}</span>
            {insertDate && insertDate === "asc" ? (
              <StyledLink
                to={`${makeUrl(pathname, currentQuery, { insertDate: "desc" })}`}
                position={insertDate}
              ></StyledLink>
            ) : (
              <StyledLink
                to={`${makeUrl(pathname, currentQuery, { insertDate: "asc" })}`}
                position={insertDate}
              ></StyledLink>
            )}
          </InnerDiv>
        </Col>
        <Col
          xs={lgSizeArray[2]}
          sm={lgSizeArray[2]}
          md={lgSizeArray[2]}
          lg={lgSizeArray[2]}
        >
          <InnerDiv>
            <span>{text.price}</span>
            {price && price === "asc" ? (
              <StyledLink
                to={`${makeUrl(pathname, currentQuery, { price: "desc" })}`}
                position={price}
              ></StyledLink>
            ) : (
              <StyledLink
                to={`${makeUrl(pathname, currentQuery, { price: "asc" })}`}
                position={price}
              ></StyledLink>
            )}
          </InnerDiv>
        </Col>
      </Row>
    </StyledDiv>
  );
};

export default memo(DataSort);
