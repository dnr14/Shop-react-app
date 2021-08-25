import SelectLinks from "components/select/SelectLinks";
import IncomeCompo from "container/IncomeContainer";
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
          <Route path={`${path}/income`} component={IncomeCompo} />
        </section>
      </StyledMain>
    </StyledMaxWidth>
  );
};

export default Select;
