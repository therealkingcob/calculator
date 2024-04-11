let operand1 = 0;
let operand2 = 0;
let operator = "";


function operate (value1, operator, value2) {
    if (operator == "add") {
        addition(value1, value2);
    } else if (operator == "sub") {
        subtraction(value1, Value2);
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