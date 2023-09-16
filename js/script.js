'use strict';
const operand1 = parseFloat(prompt('Вкажіть перше число'));
const operand2 = parseFloat(prompt('Вкажіть друге число'));
function addition(a, b){
    let result = a + b;
    console.log(`Результат додавання: ${a} + ${b} = ${result}`);
}
function subtraction(a, b){
    let result = a - b;
    console.log(`Результат віднімання: ${a} - ${b} = ${result}`);
}
function multiplication(a, b) {
    let result = a * b;
    console.log(`Результат множення: ${a} * ${b} = ${result}`);
}
function division(a, b) {
        let result = a / b;
        console.log(`Результат поділу: ${a} / ${b} = ${result}`);
}
addition(operand1, operand2);
subtraction(operand1, operand2);
multiplication(operand1, operand2);
division(operand1, operand2);
