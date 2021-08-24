import React, { memo, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "style/Styled";
import { Row } from "style/Styled";
import { setDateFormat } from "util/DateUtil";
import querytString from "query-string";

const inintialData = () => {
  const data = JSON.parse(localStorage.getItem("incomeData"));
  return data.slice(data.length - 7, data.length).map((v, idx) => ({ ...v, idx }));
};

const IncomeCompo = function IncomeCompo({ match: { path }, history: { location } }) {
  const [data, setData] = useState(inintialData());
  const sort = useMemo(() => querytString.parse(location.search).sort, [location.search]);

  useEffect(() => {
    sort === "desc"
      ? setData((prevData) => prevData.sort((a, b) => (a.time >= b.time ? 1 : -1)).map((v, idx) => ({ ...v, idx })))
      : setData((prevData) => prevData.sort((a, b) => (a.time <= b.time ? 1 : -1)).map((v, idx) => ({ ...v, idx })));
  }, [sort]);

  return (
    <>
      <DataSort path={path} />
      <ShowCompo data={data} />
    </>
  );
};

const DataSort = memo(function DataSort({ path }) {
  return (
    <>
      <div>
        <Link to={`${path}?sort=asc`}>
          <button>시간 오름차순</button>
        </Link>
        <Link to={`${path}?sort=desc`}>
          <button>시간 내림차순</button>
        </Link>
      </div>
    </>
  );
});

const ShowCompo = memo(function ShowCompo({ data }) {
  return (
    <>
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
});

export default IncomeCompo;
