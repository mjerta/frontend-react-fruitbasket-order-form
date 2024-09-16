function getTotalValue(object) {
  let totalvalue = 0;
  Object.values(object).forEach((item) => {
    totalvalue += item;
  });
  return totalvalue;
}
export default getTotalValue;