import Links from "components/insert/Links";
import Title from "components/common/Title";
import IncomeForm from "components/insert/IncomeForm";
import ExpenditureForm from "components/insert/ExpenditureForm";
import React, { useRef } from "react";
import { Route } from "react-router-dom";
import { getYYMMDD_HHMMSS } from "utils/DateUtil";
import { StyledMain } from "assets/style/insert/InsertContainer.styled";
import useChange from "hooks/useChange";

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
  const [state, handleSubmit, handleChange] = useChange(
    INITIAL_STATE,
    location
  );
  const { path } = match;

  const _swich = useRef(false);

  const handleBlur = (e) => {
    if (e.target instanceof HTMLSelectElement) {
      e.target.nextSibling.firstChild.style = "";
      _swich.current = false;
    }
  };
  const handleClick = (e) => {
    if (e.target instanceof HTMLSelectElement) {
      e.target.nextSibling.firstChild.style = _swich.current
        ? ""
        : "transform: rotate(180deg)";
      _swich.current = !_swich.current;
    }
  };

  return (
    <StyledMain>
      <section>
        <Title>입출을 가계부에 등록해보세요.</Title>
        <Links path={path} />
        <Route
          path={`${path}/expenditure`}
          render={() => (
            <ExpenditureForm
              state={state}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleBlur={handleBlur}
              handleClick={handleClick}
            />
          )}
        />
        <Route
          path={`${path}/income`}
          render={() => (
            <IncomeForm
              state={state}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleBlur={handleBlur}
              handleClick={handleClick}
            />
          )}
        />
      </section>
    </StyledMain>
  );
};

export default InsertContainer;
