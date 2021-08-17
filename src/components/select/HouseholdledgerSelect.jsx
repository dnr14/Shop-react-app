import { StyledSection, LinkContainer, Title, MaxWidthContainer, Row, Col } from "components/style/Styled";
import React, { memo, useState } from "react";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import { d } from "util/DateUtil";

const activeStyle = {
  fontWeight: "bold",
  backgroundColor: "#fff",
  color: "#000",
  border: "1px solid",
  boxShadow: "2px 2px 3px rgba(76, 209, 55, 0.7)",
  padding: "5px",
};

const HouseholdledgerSelect = ({ match: { path } }) => {
  return (
    <main>
      <MaxWidthContainer>
        <StyledSection>
          <Row>
            <Col>
              <Title>입출 목록</Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <LinkContainer>
                <NavLink to={`${path}/income`} activeStyle={activeStyle}>
                  수입
                </NavLink>
                <NavLink to={`${path}/expenditure`} activeStyle={activeStyle}>
                  지출
                </NavLink>
              </LinkContainer>

              <Route path={`${path}/income`} component={IncomeCompo} />
              <Route path={`${path}/expenditure`} component={ExpendCompo} />
            </Col>
          </Row>
        </StyledSection>
      </MaxWidthContainer>
    </main>
  );
};

const setDataSort = (data, sortStyle = "desc") => {
  return data
    .sort((a, b) => {
      let rs = sortStyle === "asc" ? (a.time > b.time ? 1 : -1) : a.time > b.time ? -1 : 1;
      return rs;
    })
    .map((v, idx) => ({ ...v, idx }));
};

const IncomeCompo = () => {
  const [data, setData] = useState(setDataSort(JSON.parse(localStorage.getItem("incomeData"))));

  const handleClick = (sortStyle) => (e) => {
    setData([...setDataSort(data, sortStyle)]);
  };

  return (
    <>
      <DataSort handleClick={handleClick} />
      {data.map((v, idx) => (
        <Row key={idx} customStyle={{ margin: "10px 0" }}>
          <Col lg={3}>
            <span>{d(v.date)}</span>
          </Col>
          <Col lg={3}>
            <span>{v.price}</span>
          </Col>
        </Row>
      ))}
    </>
  );
};

const DataSort = memo(function DataSort({ handleClick }) {
  return (
    <>
      <div>
        <span onClick={handleClick("asc")}>오름차순</span>
      </div>
      <div>
        <span onClick={handleClick("desc")}>내림차순</span>
      </div>
    </>
  );
});

const ExpendCompo = () => {
  const [date, setDate] = useState(JSON.parse(localStorage.getItem("expenditureData")));

  return (
    <>
      {date.map((v, idx) => (
        <Row key={idx}>
          <Col lg={3}>
            <span>{d(v.date)}</span>
          </Col>
          <Col lg={3}>
            <span>{v.price}</span>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default HouseholdledgerSelect;
