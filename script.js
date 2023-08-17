import { calculate } from './calculator.js';

// // TODO: Faire la manipulation du DOM dans ce fichier
const calculElement = document.querySelector('#calcul');
const inputElement = document.querySelector('#input');
const buttonsElements = document.querySelectorAll('.numpad');
const operators = document.querySelectorAll('#divideby, #times, #minus, #plus');
const equals = document.querySelector('#equals');
const reset = document.querySelector('#reset');
const clear = document.querySelector('#clear');


let displayOne = '';
let displayTwo = '';
inputElement.value = '';
let result = null;
let lastOperator = '';


buttonsElements.forEach(number => {
  number.addEventListener('click', (e) => {
    displayTwo += e.target.innerText;
    inputElement.value = displayTwo;

  })
})

operators.forEach(operation => {
  operation.addEventListener('click', (e) => {
    if (!displayTwo) return;

    const operationName = e.target.innerText;
    if (displayOne && displayTwo && lastOperator) {
      operations();
    } else {
      result = parseFloat(displayTwo);
    }
    clearElement(operationName);
    lastOperator = operationName;
  })
});

function clearElement(name='') {
  displayOne += displayTwo + ' ' + name + ' ';
  calculElement.innerText = displayOne;
  inputElement.value = '';
  displayTwo = '';
}
function operations() {
  if (lastOperator === '×') {
    result = parseFloat(result) * parseFloat(displayTwo);
  }
  else if (lastOperator === '+') {
    result = parseFloat(result) + parseFloat(displayTwo);
  }
  else if (lastOperator === '-') {
    result = parseFloat(result) - parseFloat(displayTwo);
  } else if (lastOperator === '÷') {
    result = parseFloat(result) / parseFloat(displayTwo);
  }
}

equals.addEventListener('click', (e) => {
  if (!displayOne || !displayTwo) return;

  operations();
  clearElement();
  if (result == "Infinity" || result == "NaN") {
    inputElement.value = 'Error'
  } else {
    calculElement.innerHTML += '='
    inputElement.value = result;
  }
  displayTwo = result
  displayOne = ''
})

reset.addEventListener('click', (e) => {
  calculElement.innerText = '';
  inputElement.value = '';
  displayTwo = '';
  displayOne = '';
  result = '';
});

clear.addEventListener('click', (e) => {
  if (inputElement.value == '') {
    return
  } else {
    inputElement.value = inputElement.value.slice(0, 0);
  }
})

