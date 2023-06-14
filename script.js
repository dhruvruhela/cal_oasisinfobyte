const display = document.getElementById('display');
const operatorButton = document.querySelector('.operator');

operatorButton.addEventListener('click', handleOperatorClick);

function handleOperatorClick() {
  const operator = operatorButton.innerText;
  const currentValue = display.value;
  display.value = currentValue + operator;
}
