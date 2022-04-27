let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

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
// Round numbers so they don't overflow.
// Fix displays graphical overflow when operation gets really big. divs?

('use strict');

const OPERATORS = /([\+\*\-\/])/;
let operation = '';
let operatorPresent = false;
let ANSWER;

let operationDisplay = document.getElementById('operation-display');
let resultDisplay = document.getElementById('result-display');
// Create an array for every operand and operator button
let operands = Array.from(document.querySelectorAll('.operand'));
let operators = Array.from(document.querySelectorAll('.operator'));

operands.forEach((button) =>
  button.addEventListener('click', function () {
    // Adds the operator/operand to the variable string...
    operation += button.innerHTML;
    // Updates the display
    operationDisplay.innerHTML = operation;
  })
);

operators.forEach((button) =>
  button.addEventListener('click', function () {
    // To avoid people from writing operators next to eachother
    if (!OPERATORS.test(operation.slice(-1))) {
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
    }
  })
);

document.getElementById('dot').addEventListener('click', function () {
  if (operatorPresent === false && !operation.includes('.')) {
    operation += '.';
    operationDisplay.innerHTML = operation;
  } else if (operatorPresent === true) {
    let op = operation.split(OPERATORS);
    if (!op[2].includes('.')) {
      operation += '.';
      operationDisplay.innerHTML = operation;
    }
  }
});

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
