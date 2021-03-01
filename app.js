const numbersElement = document.querySelectorAll('.number');
const displayElement = document.querySelector('.display');
const operatorElement = document.querySelectorAll('.operator');
const equalElement = document.querySelector('.equal');
const clearElement = document.querySelector('.clear');
const commaElement = document.querySelector('.comma');

let currentNumber = '';
let operator = null;
let firstNumber = null;
let sumValue = 0;









function updateDisplay(value) {
        displayElement.textContent = value;
}

function clear() {
    currentNumber = '';
    operator = null;
    firstNumber = null;
    sumValue = 0;
    updateDisplay(0);
}




const add = (a, b) => sumValue = Math.round((parseFloat(a) + parseFloat(b)) * 1e2) / 1e2;
const subtract = (a, b) => sumValue = Math.round((parseFloat(a) - parseFloat(b)) * 1e2) / 1e2;
const multiply = (a, b) => sumValue = Math.round((parseFloat(a) * parseFloat(b)) * 1e2) / 1e2;
const divide = (a, b) => {
    if (b == 0) {
        return sumValue = ':=)'
    } sumValue = Math.round((parseFloat(a) / parseFloat(b)) * 1e2) / 1e2;
}


function operate(oper, num1, num2) {
    if (currentNumber && oper && firstNumber) {
        if (oper === '+') add(num1, num2);
        else if (oper === '-') subtract(num1, num2);
        else if (oper === '*') multiply(num1, num2);
        else if (oper === '/') divide(num1, num2);
        if (sumValue < 1e10 || sumValue == ':=)') {
        firstNumber = sumValue;
        currentNumber = '';
        operator = null;
        updateDisplay(sumValue);
        } else {
            clear();
            updateDisplay('too big, baby!');
        }
    }    
};


function chooseOperator(value) {
    if (currentNumber && firstNumber) {
        operate(operator, firstNumber, currentNumber);
        operator = value;
    } else if (firstNumber) {
        operator = value;
        updateDisplay(operator);  
    } else if (currentNumber) {
        operator = value;
        firstNumber = currentNumber;
        currentNumber = ''; 
        updateDisplay(operator);
    }
    
}


function appendNumber(number) {
    if (currentNumber.length < 11) {
        if (firstNumber && !operator) {
            firstNumber = null;
            currentNumber += number;
            updateDisplay(currentNumber);
        } else {
            currentNumber += number;
            updateDisplay(currentNumber);
        }
    }
}


function addComma() {
    if (currentNumber.indexOf('.') === -1) {
        currentNumber += ".";
        updateDisplay(currentNumber);
    }
}


numbersElement.forEach(item => {
    item.addEventListener('click', (e) => {
        appendNumber(e.target.id);
    })
});

operatorElement.forEach(item => {
    item.addEventListener('click', (e) => {
        chooseOperator(e.target.id);
    })
});



equalElement.addEventListener('click', () => operate(operator, firstNumber, currentNumber));
clearElement.addEventListener('click', clear);
commaElement.addEventListener('click', addComma)

































































/*function updateDisplay(number) {
    displayElement.textContent = number;
}

function chooseOperator(operator) {
    if (firstNumber && currentNumber == '') {
        updateDisplay(operator)
    } else if (firstNumber && operator && currentNumber) {
        operate(operator, firstNumber, currentNumber);
        firstNumber = sumValue;
        currentNumber = null;
    } else {
        firstNumber = currentNumber;
        updateDisplay(operator)
        currentNumber = null;
    };
    
}


const add = (a, b) => sumValue = Math.round((parseFloat(a) + parseFloat(b)) * 1e2) / 1e2;
const subtract = (a, b) => sumValue = Math.round((parseFloat(a) - parseFloat(b)) * 1e2) / 1e2;
const multiply = (a, b) => sumValue = Math.round((parseFloat(a) * parseFloat(b)) * 1e2) / 1e2;
const divide = (a, b) => {
    if (b == 0) {
        return sumValue = ':=)'
    } sumValue = Math.round((parseFloat(a) / parseFloat(b)) * 1e2) / 1e2;
}


function operate(operator, num1, num2) {
    if (currentNumber && operator && firstNumber) {
        if (operator === '+') add(num1, num2);
        else if (operator === '-') subtract(num1, num2);
        else if (operator === '*') multiply(num1, num2);
        else if (operator === '/') divide(num1, num2);
        firstNumber = sumValue;
        updateDisplay(sumValue);
    }    
};


function appendNumber(number) {
    currentNumber = number;
}

function clear(){
    currentNumber = null;
    operator = null;
    sumValue = null;
}

numbersElement.forEach(item => {
    item.addEventListener('click', (e) => {
        appendNumber(e.target.id);
        updateDisplay(currentNumber);
    })
});

operatorElement.forEach(item => {
    item.addEventListener('click', (e) => {
        if (currentNumber && firstNumber && operator) {
            operate(operator, firstNumber, currentNumber);
            chooseOperator(e.target.id);
            currentNumber = null;
        } else {
            operator = e.target.id;
            chooseOperator(operator);
        }
    })
});



equalElement.addEventListener('click', () => operate(operator, firstNumber, currentNumber));



*/



























/*const numbers = document.querySelector('.numbers-button-container');
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
}) */