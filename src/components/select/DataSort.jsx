import React, { memo } from "react";
import CurrentSort from "./CurrentSort";
import { Col, Row } from "style/Styled";
import { makeUrl } from "utils/urlUtil";
import { StyledDiv, InnerDiv, StyledLink } from "style/select/DataSort.styled";
import { StyledButton } from "style/select/DataSort.styled";

const DataSort = ({
  pathname,
  currentQuery,
  columnText,
  removeRows,
  isCategory,
  tableColumnSize,
  removeRowIds,
}) => {
  const { date, price, insertDate, category } = currentQuery;

  return (
    <StyledDiv>
      <StyledButton visible={removeRowIds.length !== 0} onClick={removeRows}>
        삭제
      </StyledButton>
      <CurrentSort
        pathname={pathname}
        currentQuery={currentQuery}
        columnText={columnText}
      />
      <Row addStyle={{ margin: "0.5rem 0" }}>
        <Col
          xs={tableColumnSize[0]}
          sm={tableColumnSize[0]}
          md={tableColumnSize[0]}
          lg={tableColumnSize[0]}
        >
          <InnerDiv>
            <span>체크</span>
          </InnerDiv>
        </Col>
        <Col
          xs={tableColumnSize[1]}
          sm={tableColumnSize[1]}
          md={tableColumnSize[1]}
          lg={tableColumnSize[1]}
        >
          <InnerDiv>
            <span>글 번호</span>
          </InnerDiv>
        </Col>

        {isCategory && (
          <Col
            xs={tableColumnSize[2]}
            sm={tableColumnSize[2]}
            md={tableColumnSize[2]}
            lg={tableColumnSize[2]}
          >
            <InnerDiv>
              <span>{columnText.category}</span>
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
          xs={tableColumnSize[3]}
          sm={tableColumnSize[3]}
          md={tableColumnSize[3]}
          lg={tableColumnSize[3]}
        >
          <InnerDiv>
            <span>{columnText.date}</span>
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
          xs={tableColumnSize[4]}
          sm={tableColumnSize[4]}
          md={tableColumnSize[4]}
          lg={tableColumnSize[4]}
        >
          <InnerDiv>
            <span>{columnText.insertDate}</span>
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
          xs={tableColumnSize[5]}
          sm={tableColumnSize[5]}
          md={tableColumnSize[5]}
          lg={tableColumnSize[5]}
        >
          <InnerDiv>
            <span>{columnText.price}</span>
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
