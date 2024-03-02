let n1;
let operator;
let n2;
let result;

function operate(a, operator, b) {
    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
const num = document.querySelector('.numpad');
const display = document.querySelector('.display')

let val = '';

num.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('buttonN')) {
        val += target.innerText;
        display.innerText = val;
    }
    else if (target.classList.contains('buttonF') && target.innerText != 'AC' 
    && target.innerText != '='){
        if (n1) {
            n2 = Number(val);
            result = operate(n1, operator, n2);
            n1 = result;
            val = result;
            display.innerText = result;
        } else {
            n1 = Number(val);
            operator = target.innerText;
            val = '';
            display.innerText = val;
        }
    }
    //idea when +=/* is called just store the val in n1
    else if (target.innerText === '='){
        n2 = Number(val);
        result = operate(n1, operator, n2);
        val = result;
        display.innerText = val;
        n1 = 0;
        n2 = 0;
        val = '';
    }
});

num.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('buttonF') && target.innerText === 'AC') {
        n1 = 0;
        n2 = 0;
        result = '';
        display.innerText = result;
    }
});

num.addEventListener('mouseover', (event) => {
    let target = event.target;

    if (target.classList.contains('buttonN')) {
        target.style.backgroundColor = '#5C5470';
    }
    else if (target.classList.contains('buttonF')) {
        target.style.backgroundColor = '#EEE4BE';
    }
});

num.addEventListener('mouseout', (event) => {
    let target = event.target;

    if (target.classList.contains('buttonN') || target.classList.contains('buttonF')) {
        target.style.backgroundColor = '#352F44';
    } 

});

num.addEventListener('mousedown', (event) => {
    let target = event.target;

    if (target.classList.contains('buttonN')) {
        target.style.border = '1px solid #FAF0E6';
    }
    if (target.classList.contains('buttonF')) {
        target.style.border = '1px solid #B59410'
    }
});


num.addEventListener('mouseup', (event) => {
    let target = event.target;

    if (target.classList.contains('buttonN') || target.classList.contains('buttonF')) {
        target.style.border = 'none';
    }
});

num.addEventListener('mouseout', (event) => {
    let target = event.target;

    if (target.classList.contains('buttonN') || target.classList.contains('buttonF')) {
        target.style.border = 'none';
    }
});

