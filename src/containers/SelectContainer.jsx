import React from "react";
import Links from "components/select/Links";
import IncomeContainer from "containers/IncomeContainer";
import ExpenditureContainer from "containers/ExpenditureContainer";
import Title from "components/common/Title";
import { Route } from "react-router-dom";
import { StyledMaxWidth } from "style/Styled";
import { StyledMain } from "style/select/SelectContainer.styled";

const SelectContainer = ({ match }) => {
  const { path } = match;
  return (
    <StyledMaxWidth>
      <StyledMain>
        <section>
          <Title>등록한 입출을 확인하세요.</Title>
          <Links path={path} />
          <Route path={`${path}/income`} component={IncomeContainer} />
          <Route path={`${path}/expenditure`} component={ExpenditureContainer} />
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default SelectContainer;
