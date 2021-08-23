import React, { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import { setDateFormat } from "util/DateUtil";
import querytString from "query-string";

const inintialData = () => {
  const data = JSON.parse(localStorage.getItem("incomeData"));
  return data.slice(data.length - 7, data.length).map((v, idx) => ({ ...v, idx }));
};

const IncomeCompo = ({ match: { path }, history: { location } }) => {
  const [data, setData] = useState(inintialData());

  const handleClick = useCallback(() => {
    console.log("sortClick");
    const { sort } = querytString.parse(location.search);
    sort === "desc"
      ? setData((prevData) => prevData.sort((a, b) => (a.time >= b.time ? 1 : -1)).map((v, idx) => ({ ...v, idx })))
      : setData((prevData) => prevData.sort((a, b) => (a.time <= b.time ? 1 : -1)).map((v, idx) => ({ ...v, idx })));
  }, [location]);

  useEffect(() => {
    const { sort } = querytString.parse(location.search);
    if (sort === undefined) setData((prevData) => prevData.sort((a, b) => (a.time >= b.time ? 1 : -1)).map((v, idx) => ({ ...v, idx })));
  }, [location]);

  return (
    <>
      <DataSort handleClick={handleClick} path={path} />
      {data.map((v, idx) => (
        <Row key={idx} addStyle={{ margin: "10px 0" }}>
          <Col lg={1}>
            <span>{v.idx}</span>
          </Col>
          <Col lg={4}>
            <span>{setDateFormat(v.date)}</span>
          </Col>
          <Col lg={3}>
            <span>{v.price}</span>
          </Col>
          <Col lg={2}>
            <span>{new Date(v.time).toLocaleDateString()}</span>
          </Col>
          <Col lg={2}>
            <span>{new Date(v.time).toLocaleTimeString()}</span>
          </Col>
        </Row>
      ))}
    </>
  );
};

const DataSort = memo(function DataSort({ handleClick, path }) {
  return (
    <>
      <div>
        <Link to={`${path}?sort=asc`}>
          <button onClick={handleClick}>시간 오름차순</button>
        </Link>
        <Link to={`${path}?sort=desc`}>
          <button onClick={handleClick}>시간 내림차순</button>
        </Link>
      </div>
    </>
  );
});

export default IncomeCompo;
