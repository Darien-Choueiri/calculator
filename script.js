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
let n2 = null;
let result = null;
let operator = '';
let operatorNext = '';


num.addEventListener('click', (event) => {
    let target = event.target;

    //displays numbers
    if (target.classList.contains('buttonN') && val.length < 7) {
        val += target.innerText;
        display.innerText = val;
    } 

    //handles when the math function buttons are pressed
    if (target.classList.contains('buttonF') && target.innerText != 'AC' 
    && target.innerText != '='){
        if (!n1) {
            n1 = Number(val);
            val = '';
            operator = target.innerText;
            display.innerText = n1;
        } else if (val.length === 0){
            operator = target.innerText;
            val = '';
        } else {
            n2 = Number(val);
            result = operate(n1, operator, n2);
            operator = target.innerText;
            n1 = result;
            display.innerText = n1;
            val = '';
        }
    }
    //handles the result button
    if (target.innerText === '='){
        n2 = Number(val);
        result = operate(n1, operator, n2);
        display.innerText = result;
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

