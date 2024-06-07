document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('#display');
    const numButtons = document.querySelectorAll('#operand');
    const opButtons = document.querySelectorAll('#operator');
    const equalsButton = document.querySelector('#equals');
    const clearButton = document.querySelector('#clear');
  let currentValue = '0';
  let firstValue = null;
  let secondValue = null;
  let currentOperator = null;

  numButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (currentValue === '0') {
        currentValue = button.value;
      } else {
        currentValue += button.value;
      }
      display.innerText = currentValue;
    });
  });

  opButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (firstValue === null) {
        firstValue = parseFloat(currentValue);
      } else if (currentOperator) {
        secondValue = parseFloat(currentValue);
        firstValue = operate(firstValue, secondValue, currentOperator);
        display.innerText = firstValue;
      }
      currentOperator = button.value;
      currentValue = '0';
    });
  });

  equalsButton.addEventListener('click', function() {
    if (currentOperator && firstValue !== null) {
      secondValue = parseFloat(currentValue);
      const result = operate(firstValue, secondValue, currentOperator);
      display.innerText = result;
      currentValue = result;
      firstValue = null;
      secondValue = null;
      currentOperator = null;
    }
  });

  clearButton.addEventListener('click', function() {
    currentValue = '0';
    firstValue = null;
    secondValue = null;
    currentOperator = null;
    display.innerText = currentValue;
  });

  function operate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return 0;
    }
  }
});