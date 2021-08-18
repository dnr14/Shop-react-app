export const getToday = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export const getyymmddHHMMSS = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const HH = date.getHours();
  const MM = date.getMinutes();
  const SS = date.getSeconds();

  const return_obj = {
    fullDate: `${yyyy}-${mm}-${dd} ${HH}:${MM}:${SS}`,
    halfDate: getToday(),
    hours: HH,
    minutes: MM,
  }


  return return_obj;
}

export const get24Hour = () => {
  return Array.from({ length: 24 }, (_, i) => i + 1);
}

export const get60Minutes = () => {
  return Array.from({ length: 60 }, (_, i) => i);
}


export const isfillWithZero = (date) => {
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