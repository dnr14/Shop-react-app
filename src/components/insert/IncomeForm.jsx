import Submit from "components/insert/Submit";
import DateSelect from "components/insert/DateSelect";
import PriceInput from "components/insert/PriceInput";
import React, { useEffect } from "react";
import { setInitialData } from "util/LocalStorageUtil";
import Result from "components/insert/Result";

const IncomeContainer = ({ state, handleSubmit, handleChange }) => {
  useEffect(() => setInitialData("incomeData"), []);
  return (
    <>
      <form onSubmit={handleSubmit} name="income">
        <DateSelect
          error={state.dateError}
          selectedDate={state.dates.selectedDate}
          hours={state.dates.hours}
          minutes={state.dates.minutes}
          handleChange={handleChange}
        >
          수입 날짜
        </DateSelect>
        <PriceInput error={state.priceError} price={state.price} handleChange={handleChange}>
          수입 가격
        </PriceInput>
        <Submit color="#fff" padding="10px" font-weight="bold" backgroundColor="rgba(46,204,113,1)" borderRadius="10px">
          등록
        </Submit>
      </form>
      {state.insertData && <Result insertData={state.insertData} />}
    </>
  );
};

export default IncomeContainer;
