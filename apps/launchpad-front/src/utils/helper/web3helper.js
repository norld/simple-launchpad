/* eslint-disable no-undef */
export const toSmallUnit = (price, decimal) => {
  return price / Math.pow(10, decimal);
};

export const toCacatUnit = (price, decimal) => {
  const _temp = price * Math.pow(10, decimal);
  const _bn = BigInt(_temp);
  return _bn;
};

export const toBnUnit = (price, decimal, pangkat) => {
  return price.mul(pangkat.pow(decimal));
}