import React, { useCallback, useState } from "react";
import { getyymmddHHMMSS, isfillWithZero } from "util/DateUtil";
import { addItem } from "util/LocalStorageUtil";
import { setThreeComma } from "util/NumberUtil";
import { dateValidation, priceValidation } from "util/Validation";
import Error from "./Error";
import Form from "../Form";
import Submit from "./Submit";
import Date from "components/date/Date";
import Input from "./Input";

const INITIAL_STATE = {
  dates: getyymmddHHMMSS(),
  price: "",
  dateError: "",
  priceError: "",
};

const IncomeContainer = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const isDateValidation = dateValidation(state.dates.halfDate);
      const isPriceValidation = priceValidation(state.price);

      const o = { ...state };

      if (isDateValidation.result) o.dateError = isDateValidation.error;
      if (isPriceValidation.result) o.priceError = isPriceValidation.error;

      if (!isDateValidation.result && !isPriceValidation.result) {
        const itemKey = "incomeData";
        const date = `${state.dates.halfDate} ${isfillWithZero(state.dates.hours)}-${isfillWithZero(state.dates.minutes)}-00`;
        const price = `${setThreeComma(state.price)}원`;
        addItem(itemKey, { date, price });
        setState(INITIAL_STATE);
        return;
      }

      setState(o);
    },
    [state]
  );

  const handleChange = useCallback(
    (e) => {
      const { name } = e.target;

      switch (name) {
        case "hours":
          setState({ ...state, dates: { ...state.dates, [name]: e.target.value } });
          return;

        case "minutes":
          setState({ ...state, dates: { ...state.dates, [name]: e.target.value } });
          return;
        case "date":
          setState({ ...state, dateError: state.dateError && "", dates: { ...state.dates, halfDate: e.target.value } });
          return;

        case "price":
          const commaRemove = /,/gi;
          const value = e.target.value.replaceAll(commaRemove, "");

          // 길이 15자리 제한
          if (value.length > 15) {
            state.priceError === "" ? setState((preveState) => ({ ...preveState, priceError: "max Length" })) : setState((preveState) => preveState);
            return;
          }

          // ex) 011233방지
          if (value.match(/^[0][0-9]/gi)) {
            state.priceError === ""
              ? setState((preveState) => ({ ...preveState, priceError: "is first number zero " }))
              : setState((preveState) => preveState);
            return;
          }

          const reg = /\D/gi;
          if (value.match(reg) !== null) {
            const replaceValue = value.replaceAll(reg, "");
            state.priceError === ""
              ? setState((preveState) => ({ ...preveState, [name]: replaceValue, priceError: "not digit" }))
              : setState((preveState) => preveState);
          } else if (value.match(reg) === null) {
            setState((preveState) => ({ ...preveState, [name]: value, priceError: "" }));
          }
          return;

        default:
          break;
      }
    },
    [state]
  );

  return (
    <Form handleSubmit={handleSubmit}>
      <Date text={"수입 날짜"} state={state} handleChange={handleChange} />
      <Error>{state.dateError}</Error>
      <Input text={"수입 가격"} state={state} handleChange={handleChange} />
      <Error>{state.priceError}</Error>
      <Submit color="#fff" padding="10px" font-weight="bold" backgroundColor="rgba(46,204,113,1)" borderRadius="10px">
        등록
      </Submit>
    </Form>
  );
};

export default IncomeContainer;
