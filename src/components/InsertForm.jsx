import Button from "components/common/Button";
import ErrorMessage from "components/common/ErrorMessage";
import Form from "components/common/Form";
import withLoading from "hoc/withLoading";
import React from "react";
import Category from "./Category";
import InsertWrapper from "./common/InsertWrapper";
import DateSelect from "./DateSelect";
import PriceInput from "./PriceInput";

const InsertForm = ({ state, handleSubmit, handleChange, handleBlur, handleClick, name }) => {
  return (
    <Form onSubmit={handleSubmit} onBlur={handleBlur} onClick={handleClick} name={name}>
      <InsertWrapper>
        <DateSelect
          selectedDate={state.dates.selectedDate}
          hours={state.dates.hours}
          minutes={state.dates.minutes}
          handleChange={handleChange}
        />
      </InsertWrapper>
      <ErrorMessage message={state.dateError} />
      <InsertWrapper>
        <PriceInput text={name === "expenditure" ? "지출" : "수입"} price={state.price} handleChange={handleChange} />
      </InsertWrapper>
      <ErrorMessage message={state.priceError} />
      {name === "expenditure" && (
        <>
          <InsertWrapper>
            <Category category={state.category} handleChange={handleChange} />
          </InsertWrapper>
          <ErrorMessage message={state.categoryError} />
        </>
      )}
      <Button text="등록" width="100%" margin="10px 0 0 0" />
    </Form>
  );
};

export default withLoading(InsertForm);
