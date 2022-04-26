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
      add(a, b);
      break;
    case '-':
      substract(a, b);
      break;
    case '*':
      multiply(a, b);
      break;
    case '/':
      divide(a, b);
      break;
  }
}

let operationDisplay = document.getElementById('operation-display');
let operation = '';

// Create an array for every operator and operand button ('.op')
let ops = Array.from(document.querySelectorAll('.op'));

ops.forEach((button) =>
  button.addEventListener('click', function () {
    // Adds the operator/operand to the variable string...
    operation += button.innerHTML;
    // Updates the display
    operationDisplay.innerHTML = operation;
  })
);
