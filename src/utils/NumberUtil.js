export const getNumberThreeCommaDraw = (value) => {
  return value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
