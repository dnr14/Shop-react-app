import React, { memo } from "react";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import { setDateFormat } from "utils/DateUtil";
import { getNumberThreeCommaDraw } from "utils/NumberUtil";
import { Cotainer } from "style/select/DataTable.styled";

const DataTable = ({ data, isCategory }) => {
  const lgSizeArray = isCategory ? [1, 3, 2, 2, 4] : [1, 4, 3, 0, 4];

  return (
    <Cotainer>
      {data.map((item, idx) => (
        <Row key={idx} addStyle={{ margin: "1rem 0" }}>
          <Col
            xs={lgSizeArray[0]}
            sm={lgSizeArray[0]}
            md={lgSizeArray[0]}
            lg={lgSizeArray[0]}
          >
            <span>{item.idx}</span>
          </Col>

          {isCategory && (
            <Col
              xs={lgSizeArray[3]}
              sm={lgSizeArray[3]}
              md={lgSizeArray[3]}
              lg={lgSizeArray[3]}
            >
              <span>{item.category}</span>
            </Col>
          )}
          <Col
            xs={lgSizeArray[1]}
            sm={lgSizeArray[1]}
            md={lgSizeArray[1]}
            lg={lgSizeArray[1]}
          >
            <span>{setDateFormat(item.date)}</span>
          </Col>
          <Col
            xs={lgSizeArray[4]}
            sm={lgSizeArray[4]}
            md={lgSizeArray[4]}
            lg={lgSizeArray[4]}
          >
            <span>{new Date(item.insertTime).toLocaleString()}</span>
          </Col>
          <Col
            xs={lgSizeArray[2]}
            sm={lgSizeArray[2]}
            md={lgSizeArray[2]}
            lg={lgSizeArray[2]}
          >
            <span>{getNumberThreeCommaDraw(item.price)}원</span>
          </Col>
        </Row>
      ))}
    </Cotainer>
  );
};

export default memo(DataTable);
