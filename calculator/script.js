// TODO: Above user from adding multiple dots.
// Round numbers so they don't overflow.
// Fix displays graphical overflow when operation gets really big. divs?

'use strict';

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, operator, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return substract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

const OPERATORS = /([\+\*\-\/])/;

let operationDisplay = document.getElementById('operation-display');
let resultDisplay = document.getElementById('result-display');

let operation = '';
let ANSWER;

let operatorPresent = false;

// Create an array for every operand button ('.op')
let operands = Array.from(document.querySelectorAll('.operand'));

operands.forEach((button) =>
  button.addEventListener('click', function () {
    // Adds the operator/operand to the variable string...
    operation += button.innerHTML;
    // Updates the display
    operationDisplay.innerHTML = operation;
  })
);

let operators = Array.from(document.querySelectorAll('.operator'));

operators.forEach((button) =>
  button.addEventListener('click', function () {
    if (!operatorPresent) {
      // Adds the operator/operand to the variable string...
      operation += button.innerHTML;
      // Updates the display
      operationDisplay.innerHTML = operation;
      // Sets the Boolean to true.
      operatorPresent = true;
    } else {
      // Create an array from the operation string.
      let op = operation.split(OPERATORS);
      // Use the array as arguments to execute the operations.
      // Note that they need to be casted into numbers, otherwise it concats.
      ANSWER = operate(Number(op[0]), op[1], Number(op[2]));
      // Actualize the operation string and displays.
      operation = ANSWER + button.innerHTML;
      operationDisplay.innerHTML = operation;
      resultDisplay.innerHTML = ANSWER;
    }
  })
);

document.getElementById('equals').addEventListener('click', function () {
  let op = operation.split(OPERATORS);
  if (op.length === 3) {
    ANSWER = operate(Number(op[0]), op[1], Number(op[2]));
    operation = ANSWER;
    operationDisplay.innerHTML = operation;
    resultDisplay.innerHTML = ANSWER;
    operatorPresent = false;
  }
});

document.getElementById('clear').addEventListener('click', function () {
  operatorPresent = false;
  operation = '';
  operationDisplay.innerHTML = operation;
});

document.getElementById('delete').addEventListener('click', function () {
  if (OPERATORS.test(operation.slice(-1))) operatorPresent = false;
  operation = operation.slice(0, -1);
  operationDisplay.innerHTML = operation;
});
