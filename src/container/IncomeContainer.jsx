import Submit from "components/insert/Submit";
import DateSelect from "components/insert/DateSelect";
import PriceInput from "components/insert/PriceInput";
import React, { useCallback, useEffect, useState } from "react";
import { getYYMMDD_HHMMSS, isFillWithZero } from "util/DateUtil";
import { addItem, setInitialData } from "util/LocalStorageUtil";
import { setNumberThreeCommaDraw } from "util/NumberUtil";
import { dateValidation, priceValidation } from "util/Validation";
import Result from "components/insert/Result";

const INITIAL_STATE = {
  dates: getYYMMDD_HHMMSS(),
  price: "",
  dateError: "",
  priceError: "",
  insertData: "",
};

const ITEM_KEY = "incomeData";

const IncomeContainer = () => {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => setInitialData(ITEM_KEY), []);

  const handleChange = useCallback((e) => {
    const { name } = e.target;

    switch (name) {
      case "hours":
        setState((prevState) => ({ ...prevState, dates: { ...prevState.dates, [name]: e.target.value } }));
        return;

      case "minutes":
        setState((prevState) => ({ ...prevState, dates: { ...prevState.dates, [name]: e.target.value } }));
        return;
      case "date":
        setState((prevState) => ({
          ...prevState,
          dateError: prevState.dateError && "",
          dates: { ...prevState.dates, selectedDate: e.target.value },
        }));
        return;

      case "price":
        const commaRemove = /,/gi;
        const value = e.target.value.replaceAll(commaRemove, "");

        // 길이 15자리 제한
        if (value.length > 15) {
          setState((prevState) => (prevState.priceError === "" ? { ...prevState, priceError: "max Length" } : prevState));
          return;
        }

        // ex) 011233방지
        if (value.match(/^[0][0-9]/gi)) {
          setState((prevState) => (prevState.priceError === "" ? { ...prevState, priceError: "is first number zero" } : prevState));
          return;
        }

        const reg = /\D/gi;
        if (value.match(reg) !== null) {
          const replaceValue = value.replaceAll(reg, "");
          setState((prevState) => (prevState.priceError === "" ? { ...prevState, [name]: replaceValue, priceError: "not digit" } : prevState));
        } else if (value.match(reg) === null) {
          setState((preveState) => {
            return { ...preveState, [name]: value, priceError: "" };
          });
        }
        return;

      default:
        break;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDateValidation = dateValidation(state.dates.selectedDate);
    const isPriceValidation = priceValidation(state.price);

    const o = { ...state };

    if (isDateValidation.result) o.dateError = isDateValidation.error;
    if (isPriceValidation.result) o.priceError = isPriceValidation.error;

    if (!isDateValidation.result && !isPriceValidation.result) {
      const date = `${state.dates.selectedDate} ${isFillWithZero(state.dates.hours)}:${isFillWithZero(state.dates.minutes)}:00`;
      const time = new Date(date).getTime();
      const price = `${setNumberThreeCommaDraw(state.price)}원`;
      addItem(ITEM_KEY, { date, price, time });
      setState({ ...INITIAL_STATE, insertData: { date, price, time } });
      return;
    }

    setState(o);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
