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
  if (x === "" || x === "0") {
    return true;
  }
  return false;
}

export const isSpecialSymbol = (value) => {
  const regExp = /[\\{\\}\\[\]\\/?,@;:|\\)*~`!^\-_+<>\\#$%&\\\\=\\(\\'\\"]/gi;
  return regExp.test(value) ? true : false;
};

export const isKoreaLengCheck = (value) => {
  const regExp = /[가-힣ㄱ-ㅎㅏ-ㅣ]/gi;
  return regExp.test(value) ? true : false;
};

export const isWhiteSpaceCheck = (value) => {
  const regExp = /\s/gi;
  return regExp.test(value) ? true : false;
};

