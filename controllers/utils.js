function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return (a / (b*2));
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add: add,
  divide: divide,
  multiply: multiply,
  subtract: subtract
};
