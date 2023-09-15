export const capitalize = (str) =>
  typeof str === 'string' ? str.at(0).toUpperCase() + str.slice(1) : '';
