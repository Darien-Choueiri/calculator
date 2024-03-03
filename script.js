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

//flow chart
// number -> symbol -> number -> =
// number -> symbol -> number -> symbol -> number -> equals

let val = '';
let n1 = null;
let operator = '';
let n2 = null;
let result = null;
let operatorNext = '';
num.addEventListener('click', (event) => {
    let target = event.target;

    if (target.classList.contains('buttonN')) {
        val += target.innerText;
        display.innerText = val;
    }
    //works if you use = between each step, does not work without that
    if (target.classList.contains('buttonF') && target.innerText != 'AC' 
    && target.innerText != '='){
        if (!n1){
            n1 = Number(val);
            operator = target.innerText;
            val = '';
            display.innerText = val;
        } else {
            operatorNext = target.innerText;
            n2 = Number(val);
            result = operate(n1, operator, n2);
            n1 = result;
            display.innerText = n1;
            operator = operatorNext;
            operatorNext = '';
            val = '';
        }

    } 
    if (target.innerText === '='){
        n2 = Number(val);
        result = operate(n1, operator, n2);
        val = result;
        display.innerText = val;
        n1 = result;
        operator = '';
        n2 = null;
        val = '';
    }
});

num.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('buttonF') && target.innerText === 'AC') {
        val = '';
        n1 = null;
        n2 = null;
        operator = '';
        result = null;
        display.innerText = val;
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

