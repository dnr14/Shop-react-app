import React, { useState } from "react";
import Form from "./Form";
import Col from "./style/Col";
import Row from "./style/Row";

const INITIAL_STATE = {
  insertDate: "",
  insertPrice: "",
  insertCategory: "two",
};

// 기능적인거
const InsertContainer = () => {
  const [insertState, setInsertState] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    setInsertState((preveState) => ({ ...preveState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form handleSubmit={handleSubmit}>
      <ColTwoAndTen>
        <div>지출 날짜</div>
        <input type="text" name="insertDate" value={insertState.insertDate} onChange={handleChange} />
      </ColTwoAndTen>
      <ColTwoAndTen>
        <div>지출 가격</div>
        <input type="text" name="insertPrice" value={insertState.insertPrice} onChange={handleChange} />
      </ColTwoAndTen>
      <ColTwoAndTen>
        <div>지출 카테고리</div>
        <select name="insertCategory" value={insertState.insertCategory} onChange={handleChange}>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
        </select>
      </ColTwoAndTen>
      <Row>
        <Col>
          <button type="submit">등록</button>
        </Col>
      </Row>
    </Form>
  );
};

const ColTwoAndTen = React.memo(({ children }) => {
  const firstColSize = 2;
  const secondColSize = 10;
  return (
    <Row>
      <Col xs={firstColSize} sm={firstColSize} md={firstColSize} lg={firstColSize}>
        {children[0]}
      </Col>
      <Col xs={secondColSize} sm={secondColSize} md={secondColSize} lg={secondColSize}>
        {children[1]}
      </Col>
    </Row>
  );
});

export default InsertContainer;
