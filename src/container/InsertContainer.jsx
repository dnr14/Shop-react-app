import InsertLinks from "components/insert/InsertLinks";
import Title from "components/common/Title";
import IncomeForm from "components/insert/IncomeForm";
import ExpenditureForm from "components/insert/ExpenditureForm";
import React from "react";
import { Route } from "react-router-dom";
import { StyledMaxWidth } from "style/Styled";
import { getYYMMDD_HHMMSS } from "util/DateUtil";
import styled from "styled-components";
import useChange from "hooks/useChange";

const StyledMain = styled.main`
  width: 80%;
  margin: 0 auto;
`;

const INITIAL_STATE = {
  dates: getYYMMDD_HHMMSS(),
  price: "",
  category: "",
  dateError: "",
  priceError: "",
  categoryError: "",
  insertData: "",
};

const InsertContainer = ({ match, location }) => {
  const [state, handleSubmit, handleChange] = useChange(INITIAL_STATE, location);
  const { path } = match;

  return (
    <StyledMaxWidth>
      <StyledMain>
        <section>
          <Title>입출을 가계부에 등록해보세요.</Title>
          <InsertLinks path={path} />
          <Route
            path={`${path}/expenditure`}
            render={() => <ExpenditureForm state={state} handleChange={handleChange} handleSubmit={handleSubmit} />}
          />
          <Route path={`${path}/income`} render={() => <IncomeForm state={state} handleChange={handleChange} handleSubmit={handleSubmit} />} />
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default InsertContainer;
