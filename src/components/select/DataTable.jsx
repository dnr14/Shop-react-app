import React, { memo } from "react";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import styled from "styled-components";
import { setDateFormat } from "util/DateUtil";
import { setNumberThreeCommaDraw } from "util/NumberUtil";

const StyledDiv = styled.div`
  margin-top: 20px;
  min-height: 180px;
`;

const DataTable = ({ data, isCategory }) => {
  const lgSizeArray = [1, isCategory ? 3 : 3, isCategory ? 2 : 2, isCategory ? 2 : 0, 2];
  return (
    <StyledDiv>
      {data.map((item, idx) => (
        <Row key={idx} addStyle={{ margin: "10px 0" }}>
          <Col lg={lgSizeArray[0]}>
            <span>{item.idx}</span>
          </Col>
          <Col lg={lgSizeArray[1]}>
            <span>{setDateFormat(item.date)}</span>
          </Col>
          <Col lg={lgSizeArray[2]}>
            <span>{setNumberThreeCommaDraw(item.price)}원</span>
          </Col>
          {isCategory && (
            <Col lg={lgSizeArray[3]}>
              <span>{item.category}</span>
            </Col>
          )}
          <Col lg={lgSizeArray[4]}>
            <span>{new Date(item.insertTime).toLocaleDateString()}</span>
            <span>{new Date(item.insertTime).toLocaleTimeString()}</span>
          </Col>
        </Row>
      ))}
    </StyledDiv>
  );
};

export default memo(DataTable);
