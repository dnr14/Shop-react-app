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

  const obj = {
    fullDate: `${yyyy}-${mm}-${dd} ${HH}:${MM}:${SS}`,
    halfDate: getToday(),
    hours: HH,
    minutes: MM,
  }


  return obj;
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