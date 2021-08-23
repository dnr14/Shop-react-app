import Submit from "components/insert/Submit";
import React, { useEffect } from "react";
import { setInitialData } from "util/LocalStorageUtil";
import DateSelect from "components/insert/DateSelect";
import PriceInput from "components/insert/PriceInput";
import CategorySelect from "components/insert/CategorySelect";
import Result from "components/insert/Result";

const ExpenditureContainer = ({ state, handleSubmit, handleChange }) => {
  useEffect(() => setInitialData("expenditureData"), []);

  return (
    <>
      <form onSubmit={handleSubmit} name="expenditure">
        <DateSelect
          selectedDate={state.dates.selectedDate}
          hours={state.dates.hours}
          minutes={state.dates.minutes}
          error={state.dateError}
          handleChange={handleChange}
        >
          지출날짜
        </DateSelect>
        <PriceInput error={state.priceError} price={state.price} handleChange={handleChange}>
          지출 가격
        </PriceInput>
        <CategorySelect error={state.categoryError} category={state.category} handleChange={handleChange}>
          지출 카테고리
        </CategorySelect>

        <Submit color="#fff" padding="10px" fontWeight="bold" backgroundColor="rgba(46,204,113,1)" borderRadius="10px">
          등록
        </Submit>
      </form>
      {state.insertData && <Result insertData={state.insertData} />}
    </>
  );
};

export default ExpenditureContainer;
