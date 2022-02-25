export const getToday = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = isFillWithZero(date.getMonth() + 1);
  const dd = isFillWithZero(date.getDate());
  return `${yyyy}-${mm}-${dd}`;
};

export const getYYMMDD_HHMMSS = () => {
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const DD = String(date.getDate()).padStart(2, "0");
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  return {
    today: `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`,
    selectedDate: getToday(),
    hours: hh,
    minutes: mm,
  };
};

export const getOneToTwentyForeHoure = () => {
  const houre = Array.from({ length: 24 }, (_, i) => String(i + 1).padStart(2, "0"));
  return houre;
};

export const getZeroToFiftyNineMinutes = () => {
  const Minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0"));
  return Minutes;
};

export const isFillWithZero = date => {
  return String(date).padStart(2, "0");
};

export const setDateFormat = date => {
  const ymdArray = ["년", "월", "일"];
  const hmsArray = ["시", "분"];
  let [yymmdd, hhmmss] = String(date).split(" ");
  yymmdd = yymmdd.split("-").reduce((acc, cur, idx) => (acc += `${cur}${ymdArray[idx]} `), "");
  hhmmss = hhmmss
    .split(":")
    .slice(0, 2)
    .reduce((acc, cur, idx) => (acc += `${cur}${hmsArray[idx]} `), "");

  return `${yymmdd} ${hhmmss}`;
};

export const setInputCheckBoxDateType = time => {
  const date = new Date(time);
  const YYYY = date.getFullYear();
  const MM = isFillWithZero(date.getMonth() + 1);
  const DD = isFillWithZero(date.getDate());

  return `${YYYY}-${MM}-${DD}`;
};
export const setInputCheckBoxTimeType = time => {
  const date = new Date(time);
  const HH = isFillWithZero(date.getHours());
  const MM = isFillWithZero(date.getMinutes());

  return {
    getHours() {
      return HH;
    },
    getMinutes() {
      return MM;
    },
  };
};
