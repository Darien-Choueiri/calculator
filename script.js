let n1;
let operator;
let n2;

function operate(a, operator, b) {
    switch(operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
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

let val;
num.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('buttonN')) {
        val = target.innerText;
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

