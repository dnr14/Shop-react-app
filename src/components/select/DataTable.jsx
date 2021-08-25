import React, { memo } from "react";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import styled from "styled-components";
import { setDateFormat } from "util/DateUtil";

const StyledDiv = styled.div`
  margin-top: 20px;
`;

const DataTable = ({ data }) => {
  return (
    <StyledDiv>
      <Row addStyle={{ margin: "10px 0" }}>
        <Col lg={1}>
          <span>No 1.</span>
        </Col>
        <Col lg={4}>
          <span>수입 날짜</span>
        </Col>
        <Col lg={3}>
          <span>수입</span>
        </Col>
        <Col lg={2}>
          <span>등록일짜</span>
        </Col>
      </Row>
      {data.map((item, idx) => (
        <Row key={idx} addStyle={{ margin: "10px 0" }}>
          <Col lg={1}>
            <span>{item.idx}</span>
          </Col>
          <Col lg={4}>
            <span>{setDateFormat(item.date)}</span>
          </Col>
          <Col lg={3}>
            <span>{item.price}</span>
          </Col>
          <Col lg={4}>
            <span>{new Date(item.insertTime).toLocaleDateString()}</span>
            <span>{new Date(item.insertTime).toLocaleTimeString()}</span>
          </Col>
        </Row>
      ))}
    </StyledDiv>
  );
};

export default memo(DataTable);
