import Title from "components/common/Title";
import React, { useRef } from "react";
import { Route } from "react-router-dom";
import { getYYMMDD_HHMMSS } from "utils/DateUtil";
import useChange from "hooks/useChange";
import { useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { tab } from "assets/style/GlobalStyled";
import { mobile } from "assets/style/GlobalStyled";
import InsertForm from "components/InsertForm";
import Links from "components/common/Links";

const INITIAL_STATE = {
  dates: getYYMMDD_HHMMSS(),
  price: "",
  category: "",
  dateError: "",
  priceError: "",
  categoryError: "",
  insertData: "",
};

const Insert = () => {
  const { path } = useRouteMatch();
  const location = useLocation();

  const { loading, state, handleSubmit, handleChange } = useChange(INITIAL_STATE, location);

  const switchRef = useRef(false);

  const handleBlur = e => {
    if (e.target instanceof HTMLSelectElement) {
      e.target.nextSibling.firstChild.style = "";
      switchRef.current = false;
    }
  };
  const handleClick = e => {
    if (e.target instanceof HTMLSelectElement) {
      e.target.nextSibling.firstChild.style = switchRef.current ? "" : "transform: rotate(180deg)";
      switchRef.current = !switchRef.current;
    }
  };

  return (
    <InsertWrapper>
      <Title text="입출을 가계부에 등록해보세요." />
      <div>
        <Links text="지출" path={`${path}/expenditure`} />
        <Links text="수입" path={`${path}/income`} />
      </div>
      <Route path={`${path}/expenditure`}>
        <InsertForm
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
          handleClick={handleClick}
          name="expenditure"
          loading={loading}
        />
      </Route>
      <Route path={`${path}/income`}>
        <InsertForm
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleBlur={handleBlur}
          handleClick={handleClick}
          name="income"
          loading={loading}
        />
      </Route>
    </InsertWrapper>
  );
};

const InsertWrapper = styled.article`
  width: 70%;
  margin: 0 auto;
  ${tab} {
    width: 80%;
  }
  ${mobile} {
    width: 95%;
  }
`;

export default Insert;
