import React, { memo } from "react";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import { setDateFormat } from "utils/DateUtil";
import { getNumberThreeCommaDraw } from "utils/NumberUtil";
import { Cotainer } from "style/select/DataTable.styled";

const DataTable = ({
  data,
  isCategory,
  tableColumnSize,
  visible,
  removeRowsCheckedClick,
  boardModify,
  allCheck,
}) => {
  return (
    <Cotainer visible={visible}>
      {data &&
        data.map((item) => (
          <Data
            key={item.id}
            item={item}
            isCategory={isCategory}
            tableColumnSize={tableColumnSize}
            removeRowsCheckedClick={removeRowsCheckedClick}
            boardModify={boardModify}
            allCheck={allCheck}
          />
        ))}
    </Cotainer>
  );
};

const Data = function Data({
  item,
  boardModify,
  tableColumnSize,
  removeRowsCheckedClick,
  isCategory,
}) {
  return (
    <Row>
      <label>
        <Col
          xs={tableColumnSize[0]}
          sm={tableColumnSize[0]}
          md={tableColumnSize[0]}
          lg={tableColumnSize[0]}
        >
          <span>
            <input
              type="checkbox"
              id={`check${item.id}`}
              onChange={removeRowsCheckedClick(item.id)}
            />
            <label htmlFor={`check${item.id}`}></label>
          </span>
        </Col>
        <Col
          xs={tableColumnSize[1]}
          sm={tableColumnSize[1]}
          md={tableColumnSize[1]}
          lg={tableColumnSize[1]}
        >
          <span>{item.idx}</span>
        </Col>

        {isCategory && (
          <Col
            xs={tableColumnSize[2]}
            sm={tableColumnSize[2]}
            md={tableColumnSize[2]}
            lg={tableColumnSize[2]}
          >
            <span>{item.category}</span>
          </Col>
        )}
        <Col
          xs={tableColumnSize[3]}
          sm={tableColumnSize[3]}
          md={tableColumnSize[3]}
          lg={tableColumnSize[3]}
        >
          <span>{setDateFormat(item.date)}</span>
        </Col>
        <Col
          xs={tableColumnSize[4]}
          sm={tableColumnSize[4]}
          md={tableColumnSize[4]}
          lg={tableColumnSize[4]}
        >
          <span>{new Date(item.insertTime).toLocaleString()}</span>
        </Col>
        <Col
          xs={tableColumnSize[5]}
          sm={tableColumnSize[5]}
          md={tableColumnSize[5]}
          lg={tableColumnSize[5]}
        >
          <span>{getNumberThreeCommaDraw(item.price)}원</span>
          <span onClick={boardModify(item.id)} />
        </Col>
      </label>
      <div>
        <Col
          xs={tableColumnSize[0]}
          sm={tableColumnSize[0]}
          md={tableColumnSize[0]}
          lg={tableColumnSize[0]}
        >
          <span></span>
        </Col>
        <Col
          xs={tableColumnSize[1]}
          sm={tableColumnSize[1]}
          md={tableColumnSize[1]}
          lg={tableColumnSize[1]}
        >
          <span>{item.idx}</span>
        </Col>

        {isCategory && (
          <Col
            xs={tableColumnSize[2]}
            sm={tableColumnSize[2]}
            md={tableColumnSize[2]}
            lg={tableColumnSize[2]}
          >
            <span>{item.category}</span>
          </Col>
        )}
        <Col
          xs={tableColumnSize[3]}
          sm={tableColumnSize[3]}
          md={tableColumnSize[3]}
          lg={tableColumnSize[3]}
        >
          <span>{setDateFormat(item.date)}</span>
        </Col>
        <Col
          xs={tableColumnSize[4]}
          sm={tableColumnSize[4]}
          md={tableColumnSize[4]}
          lg={tableColumnSize[4]}
        >
          <span>{new Date(item.insertTime).toLocaleString()}</span>
        </Col>
        <Col
          xs={tableColumnSize[5]}
          sm={tableColumnSize[5]}
          md={tableColumnSize[5]}
          lg={tableColumnSize[5]}
        >
          <span>{getNumberThreeCommaDraw(item.price)}원</span>
        </Col>
      </div>
    </Row>
  );
};

export default memo(DataTable);
