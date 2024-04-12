let whichCharacter = "first";
let answer = 0;
let operand1 = 0;
let operand2 = 0;
let operator = "";
document.addEventListener("DOMContentLoaded", function() {

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


})

function characterPressed(type, character) {
    if (whichCharacter == "first" && type == "number") {
        display.innerHTML += character;
        whichCharacter = "second";
        operand1 = character;
    } else if (whichCharacter == "second" && type == "operator") {
        display.innerHTML += character;
        whichCharacter = "third";
        operator = character;
    } else if (whichCharacter == "third" && type == "number") {
        display.innerHTML += character;
        whichCharacter = "fourth";
        operand2 = character;
    }
}


function equalKeyPressed() {
    console.log(operator)
    display.innerHTML = operate(operand1, operator, operand2);
}

function operate (value1, operator, value2) {
    if (operator == "+") {
        return addition(value1, value2);
        console.log(addition(value1, value2))
    } else if (operator == "-") {
        return subtraction(value1, value2);
    } else if (operator == "*") {
        return multiplication(value1, value2);
    } else if (operator == "/") {
        return division(value1, value2);
    }

}

function addition (value1, value2) {
    return value1 + value2;
}

function subtraction (value1, value2) {
    return value1 - value2;
}

function multiplication (value1, value2) {
    return value1 * value2;
}

function division (value1, value2) {
    return value1 / value2;
}