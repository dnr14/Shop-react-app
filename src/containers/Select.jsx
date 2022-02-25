import React from "react";
import Income from "containers/Income";
import Expenditure from "containers/Expenditure";
import Title from "components/common/Title";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "assets/style/GlobalStyled";
import { useRouteMatch } from "react-router-dom";
import Links from "components/common/Links";
import { getBoxShadow3 } from "assets/style/GlobalStyled";

const Select = () => {
  const { path } = useRouteMatch();

  return (
    <SelectWrapper>
      <Title text="등록한 입출을 확인하세요." />
      <div>
        <Links text="입출" path={`${path}/income`} />
        <Links text="지출" path={`${path}/expenditure`} />
      </div>
      <Route path={`${path}/income`} component={Income} />
      <Route path={`${path}/expenditure`} component={Expenditure} />
    </SelectWrapper>
  );
};

export const SelectWrapper = styled.article`
  width: 90%;
  margin: 0 auto;

  ${mobile} {
    width: 95%;
  }

  padding: 0.1rem 1rem;
  ${getBoxShadow3};
`;

export default Select;
