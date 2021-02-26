//const numbers = document.querySelectorAll('.number');
const numbers = document.querySelector('.numbers-button-container');
const displayResult = document.querySelector('.result');
const operatorElements = document.querySelector('.function-column-container')


let firstNumber;
let operator;
let secondNumber;
let currentValue ='';

// Chooses Numbers

function addNumbers(e) {
    if (e.target !== e.currentTarget) {
         let valueSelected = e.target.id;
         currentValue += valueSelected;
    }
    updateDisplay();
    e.stopPropagation();
}

function updateDisplay () {
    displayResult.textContent = currentValue; 
}

//Chooses an Operator

function chooseOperator (e) {
    if (currentValue !== '') {
        if (e.target !== e.currentTarget) {
            let operatorSelected = e.target.id;
            firstNumber = currentValue;
            currentValue = operatorSelected;
            operator = operatorSelected;
        }
    updateDisplay();
    currentValue = ''
    e.stopPropagation();
    }    
}

numbers.addEventListener('click', addNumbers, false);
operatorElements.addEventListener('click', chooseOperator);




const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, num1, num2) => {
    if (operator === '+') add(num1, num2);
    else if (operator === '-') subtract(num1, num2);
    else if (operator === '*') multiply(num1, num2);
    else if (operator === '/') divide(num1, num2);
}