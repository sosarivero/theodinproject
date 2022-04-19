const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let sum = 0;

  array.forEach((num) => (sum += num));

  return sum;
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b, 1);
};

const power = function (base, power) {
  result = 1;

  for (let i = 0; i < power; i++) {
    result *= base;
  }

  return result;
};

const factorial = function (n) {
  base = 1;
  for (let i = 1; i <= n; i++) {
    base *= i;
  }
  return base;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
