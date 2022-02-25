export const getNumberThreeCommaDraw = (value = "") =>
  value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
