import SelectLinks from "components/select/SelectLinks";
import IncomeContainer from "container/IncomeContainer";
import ExpenditureContainer from "container/ExpenditureContainer";
import Title from "components/Title";
import React from "react";
import { Route } from "react-router-dom";
import { StyledMaxWidth } from "style/Styled";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 90%;
  margin: 0 auto;
`;

const Select = ({ match: { path } }) => {
  return (
    <StyledMaxWidth>
      <StyledMain>
        <section>
          <Title>등록한 입출을 확인하세요.</Title>
          <SelectLinks path={path} />
          <Route path={`${path}/income`} component={IncomeContainer} />
          <Route path={`${path}/expenditure`} component={ExpenditureContainer} />
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default Select;
