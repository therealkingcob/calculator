let whichNumber = "first";
document.addEventListener("DOMContentLoaded", function() {
let operand1 = 0;
let operand2 = 0;
let operator = "";
const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");
const number6 = document.getElementById("6");
const number7 = document.getElementById("7");
const number8 = document.getElementById("8");
const number9 = document.getElementById("9");
const display = document.getElementById("display");



function operate (value1, operator, value2) {
    if (operator == "add") {
        addition(value1, value2);
    } else if (operator == "sub") {
        subtraction(value1, value2);
    } else if (operator == "mult") {
        multiplication(value1, value2);
    } else if (operator == "div") {
        division(value1, value2);
    }

}
function addition () {
    return value1 + value2;
}

function subtraction () {
    return value1 - value2;
}

function multiplication () {
    return value1 * value2;
}

function division () {
    return value1 / value2;
}


})

function numberPressed(number) {
    if (whichNumber == "first") {
        display.innerHTML += number;
        whichNumber = "second";
    }
}


