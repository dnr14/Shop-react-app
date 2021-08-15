export const dateValidation = (date) => {

  const obj = {
    error: "no Error",
    result: false
  }

  if (isEmpty(date)) {
    obj.error = "date is Empty";
    obj.result = true;
  }

  return obj;
}


export const priceValidation = price => {

  const obj = {
    error: "no Error",
    result: false
  }

  if (isEmpty(price)) {
    obj.error = "price is Empty";
    obj.result = true;
  }
  return obj;

}

export const isEmpty = (x) => {
  if (x === "") {
    return true;
  }
  if (x === "0") {
    return true;
  }
  return false;
}