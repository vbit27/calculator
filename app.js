//const numbers = document.querySelectorAll('.number');
const numbers = document.querySelector('.numbers-button-container');
const displayResult = document.querySelector('.result');
const operatorElements = document.querySelector('.function-column-container')
const equalOperatorElement = document.querySelector('.equal-operator-container')

let currentValue = '';
let firstNumber = '';
let secondNumber;
let operator;
let sumValue;


// Updates the screen

function updateDisplay (value) {
    displayResult.textContent = value; 
}

// Chooses Numbers

function addNumbers(e) {
    if (e.target !== e.currentTarget) {
         let valueSelected = e.target.id;
         currentValue += valueSelected;
    }
    updateDisplay(currentValue);
    e.stopPropagation();
}


//Chooses an Operator

function chooseOperator (e) {
    operator = e.target.id;
    if (e.target !== e.currentTarget) {
        if (firstNumber !== '' && currentValue !== '') {
            calculate();  
        } else if (currentValue !== '') {
            firstNumber = currentValue;
            currentValue = '';
            updateDisplay(operator);
        }
  } e.stopPropagation();
}

// Calculates 

function calculate () {
    secondNumber = currentValue;
    operate(operator, firstNumber, secondNumber);
    firstNumber = sumValue;
    currentValue = '';
    updateDisplay(sumValue);
}


const add = (a, b) => sumValue = parseInt(a) + parseInt(b);
const subtract = (a, b) => sumValue = a - b;
const multiply = (a, b) => sumValue = a * b;
const divide = (a, b) => sumValue = a / b;

const operate = (operator, num1, num2) => {
    if (operator === '+') add(num1, num2);
    else if (operator === '-') subtract(num1, num2);
    else if (operator === '*') multiply(num1, num2);
    else if (operator === '/') divide(num1, num2);
};


numbers.addEventListener('click', addNumbers, false);
operatorElements.addEventListener('click', chooseOperator);
equalOperatorElement.addEventListener('click', calculate);



/*if ( currentValue !== '' && secondNumber !== '' && operator !== '') {
                calculate(operator, firstNumber, currentValue);
                operator = e.target.id;

            }*/