import Links from "components/Links";
import IncomeCompo from "components/select/IncomeCompo";
import Title from "components/Title";
import React, { memo, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Row } from "style/Styled";
import { Col } from "style/Styled";
import { StyledMaxWidth } from "style/Styled";
import styled from "styled-components";
import { setDateFormat } from "util/DateUtil";

const StyledMain = styled.main`
  width: 90%;
  margin: 0 auto;
`;

const SelectContainer = ({ match: { path } }) => {
  return (
    <StyledMaxWidth>
      <StyledMain>
        <section>
          <Title>등록한 입출을 확인하세요.</Title>
          <Links path={path} />
          <Route path={`${path}/expenditure`} component={ExpendCompo} />
          <Route path={`${path}/income`} component={IncomeCompo} />
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

const ExpendCompo = () => {
  const [date, setDate] = useState(JSON.parse(localStorage.getItem("expenditureData")));

  return (
    <>
      {date.map((v, idx) => (
        <Row key={idx}>
          <Col lg={3}>
            <span>{setDateFormat(v.date)}</span>
          </Col>
          <Col lg={3}>
            <span>{v.price}</span>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default SelectContainer;
