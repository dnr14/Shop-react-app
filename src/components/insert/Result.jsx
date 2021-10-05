import React, { memo, useCallback } from "react";
import { Row, Col } from "style/Styled";
import { Container } from "style/insert/Result.styled";
import { setDateFormat } from "utils/DateUtil";
import { getNumberThreeCommaDraw } from "utils/NumberUtil";

const Result = ({ insertData }) => {
  const { date, price, category } = insertData;
  const commaDraw = useCallback((price) => getNumberThreeCommaDraw(price), []);

  return (
    <Row>
      <Col>
        <Container>
          <h1>방금 등록한 기록</h1>
          <div>
            <span>등록한 시간</span>
            <span>{setDateFormat(date)}</span>
          </div>
          {category && (
            <div>
              <span>등록한 카테고리</span>
              <span>{category}</span>
            </div>
          )}
          <div>
            <span>등록한 가격</span>
            <span>{commaDraw(price)}원</span>
          </div>
        </Container>
      </Col>
    </Row>
  );
};

export default memo(Result);
