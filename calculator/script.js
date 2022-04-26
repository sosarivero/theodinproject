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
      let op = operation.split(/([\+\*\-\/])/);
      debugger;
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
