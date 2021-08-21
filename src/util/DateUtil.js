export const getToday = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = isFillWithZero(date.getMonth() + 1);
  const dd = isFillWithZero(date.getDate());
  return `${yyyy}-${mm}-${dd}`;
}

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
}

export const getOneToTwentyForeHoure = () => {
  return Array.from({ length: 24 }, (_, i) => i + 1);
}

export const getZeroToFiftyNineMinutes = () => {
  return Array.from({ length: 60 }, (_, i) => i);
}


export const isFillWithZero = (date) => {
  return String(date).padStart(2, "0");
}

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
}