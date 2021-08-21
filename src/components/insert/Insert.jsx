import InsertLinks from "components/insert/InsertLinks";
import InsertTitle from "components/insert/InsertTitle";
import IncomeContainer from "container/IncomeContainer";
import ExpenditureContainer from "container/ExpenditureContainer";
import React from "react";
import { Route } from "react-router-dom";
import { StyledMaxWidth } from "style/Styled";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 80%;
  margin: 0 auto;
`;

const Insert = ({ match: { path } }) => {
  return (
    <StyledMaxWidth>
      <StyledMain>
        <section>
          <InsertTitle />
          <InsertLinks path={path} />
          <Route path={`${path}/expenditure`} component={ExpenditureContainer} />
          <Route path={`${path}/income`} component={IncomeContainer} />
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default Insert;
