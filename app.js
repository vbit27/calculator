//const numbers = document.querySelectorAll('.number');
const numbers = document.querySelector('.numbers-button-container');
const displayResult = document.querySelector('.result');



let currentValue ='';


function addNumbers(e) {
    if (e.target !== e.currentTarget) {
         let valueSelected = e.target.id;
         currentValue += valueSelected
    }
    updateDisplay();
    e.stopPropagation();
}

function updateDisplay () {
    displayResult.textContent = currentValue; 
}

numbers.addEventListener('click', addNumbers, false);


/*numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        let displayValue = '';
        if (e.target.id === 'button-7') displayValue = 7; 
        else if (e.target.id === 'button-9') displayValue += '9';
        else if (e.target.id === 'button-4') displayValue += '4';
        else if (e.target.id === 'button-5') displayValue += '5';
        else if (e.target.id === 'button-6') displayValue += '6';
        else if (e.target.id === 'button-1') displayValue += '1';
        else if (e.target.id === 'button-2') displayValue += '2';
        else if (e.target.id === 'button-3') displayValue += '3';
        else if (e.target.id === 'button-0') displayValue += '0';
        return currentValue = displayValue;
    })    
});*/



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