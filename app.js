const numbers = document.querySelector('.numbers-button-container');
const displayResult = document.querySelector('.result');
const operatorElements = document.querySelector('.function-column-container');
const equalOperatorElement = document.querySelector('.equal-operator-container');
const clearButtonElement = document.querySelector('.first-row-container');


let currentValue = '';
let firstNumber = '';
let secondNumber;
let operator;
let sumValue;


// Updates the screen

function updateDisplay (value) {
    if (value.toString().length > 11) {
       displayResult.textContent = 'too big, baby!';
    } else displayResult.textContent = value; 
}


// Calculates 

function calculate () {
    if (currentValue) {
        secondNumber = currentValue;
        operate(operator, firstNumber, secondNumber);
        firstNumber = sumValue;
        updateDisplay(sumValue);
        currentValue = '';
    }
}

// Chooses Numbers

function addNumbers(e) {
    if (e.target !== e.currentTarget) {
        if (currentValue.length < 10) {
            if(e.target.id === ".") {
                if (currentValue.includes('.')) {
                    return currentValue;
                }
            }currentValue += e.target.id;
        }    
    } updateDisplay(currentValue);
      e.stopPropagation();
    
}


//Chooses an Operator

function chooseOperator (e) {
    if (e.target !== e.currentTarget) {
        if (firstNumber !== '' && currentValue !== '') {
            calculate();  
            operator = e.target.id;
        } else if (firstNumber){
            operator = e.target.id;
            updateDisplay(operator);
        }else if (currentValue !== '') {
            operator = e.target.id;
            firstNumber = currentValue;
            currentValue = '';
            updateDisplay(operator);
        }
  } e.stopPropagation();
}

// When Clicking the equal sign

function equal() {
    if (firstNumber && operator && currentValue) {
        calculate ();
        currentValue = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        sumValue = '';
    }    
}

// Clear all the options

function clearFunctions(e) {
    if (e.target !== e.currentTarget && e.target.id === 'clear') {
        currentValue = '';
        firstNumber = '';
        secondNumber = '';
        operator = '';
        sumValue = '';
        updateDisplay('0');       
    } else if (e.target !== e.currentTarget && e.target.id === 'delete') {
            let updatedCurrentCalue = currentValue.slice(0, -1);
            currentValue = updatedCurrentCalue;
            updateDisplay(currentValue);
    }
     e.stopPropagation();
}


const add = (a, b) => sumValue = Math.round((parseFloat(a) + parseFloat(b)) * 1e2) / 1e2;
const subtract = (a, b) => sumValue = Math.round((parseFloat(a) - parseFloat(b)) * 1e2) / 1e2;
const multiply = (a, b) => sumValue = Math.round((parseFloat(a) * parseFloat(b)) * 1e2) / 1e2;
const divide = (a, b) => {
    if (b == 0) {
        return sumValue = ':=)'
    } sumValue = Math.round((parseFloat(a) / parseFloat(b)) * 1e2) / 1e2;
}

const operate = (operator, num1, num2) => {
    if (operator === '+') add(num1, num2);
    else if (operator === '-') subtract(num1, num2);
    else if (operator === '*') multiply(num1, num2);
    else if (operator === '/') divide(num1, num2);
};


numbers.addEventListener('click', addNumbers, false);
operatorElements.addEventListener('click', chooseOperator);
equalOperatorElement.addEventListener('click', equal);
clearButtonElement.addEventListener('click', clearFunctions);
window.addEventListener('keydown', function(e){
    const elementSElect = document.querySelector(`div[id='${e.key}']`);
console.log(elementSElect)
})



