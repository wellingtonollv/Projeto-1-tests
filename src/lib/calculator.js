module.exports.sum = (num1, num2) => {
  const int1 = parseInt(num1, 10);
  const int2 = +num2;
  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    throw new Error('Check your input');
  }
  return int1 + int2;
};
