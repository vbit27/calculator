const numbersElement = document.querySelectorAll('.number');
const displayElement = document.querySelector('.display');
const operatorElement = document.querySelectorAll('.operator');
const equalElement = document.querySelector('.equal');
const clearElement = document.querySelector('.clear');
const commaElement = document.querySelector('.comma');
const backspaceElement = document.querySelector('.delete');

let currentNumber = '';
let operator = null;
let firstNumber = null;
let sumValue = 0;



function updateDisplay(value) {
    if (value == '*') {
        value = 'x';
    } else if (value == '/') {
        value = '÷';
    } displayElement.textContent = value;
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
        switch (oper) {
            case '+':
                add(num1, num2);
                break;
            case '-':
                subtract(num1, num2);
                break;
            case '*':
                multiply(num1, num2);
                break;
            case '/':
                divide(num1, num2);
                break;
        } 
    } displaySum();
};

function displaySum() {
    if (sumValue == ':=)') {
        clear()
        updateDisplay('lol');
    } else if(sumValue > 1e10) {
        clear();
        updateDisplay('too big, baby!');
    } else {
        firstNumber = sumValue;
        currentNumber = '';
        operator = null;
        updateDisplay(sumValue);
    }
}


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


function backspace() {
    if (currentNumber) {
        if (currentNumber.length <= 1) {
            currentNumber = '';
            updateDisplay(0);
        } else { 
            const arrayNumber = currentNumber.split('');
            arrayNumber.pop();
            currentNumber = arrayNumber.join('');
            updateDisplay(currentNumber);
        }
    }
}

function pushKey(e) {
    if (e.key >= 0 && e.key <= 9) {
        appendNumber(e.key);
    } else if (e.key == '+' || e.key == '-') {
        chooseOperator(e.key);
    } else if (e.key == 'Backspace') {
        backspace();
    } else if (e.key == 'Enter') {
        operate(operator, firstNumber, currentNumber);
    } else if (e.key == '.') {
        addComma();
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
commaElement.addEventListener('click', addComma);
backspaceElement.addEventListener('click', backspace);
window.addEventListener('keydown', (e) => pushKey(e));