let displayValue = '0';
let operator = '';
let operand1 = '';
let operand2 = '';
let result = '';

function appendToDisplay(value) {
  if (displayValue === '0' && value !== '.') {
    displayValue = value;
  } else {
    displayValue += value;
  }
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  operator = '';
  operand1 = '';
  operand2 = '';
  result = '';
  updateDisplay();
}

function operate(op) {
  operator = op;
  operand1 = displayValue;
  displayValue = '0';
  updateDisplay();
}

function calculate() {
  operand2 = displayValue;
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      break;
  }
  displayValue = result.toString();
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}
