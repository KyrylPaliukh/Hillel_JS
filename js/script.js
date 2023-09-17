'use strict';
const operation = prompt('Вибери операцію (add, sub, mult, div):');
const operand1 = parseFloat(prompt('Вкажіть перше число'));
const operand2 = parseFloat(prompt('Вкажіть друге число'));
let result;
if (operation === 'add') {
    result = operand1 + operand2;
}
else if (operation === 'sub') {
    result = operand1 - operand2;
}
else if (operation === 'mult') {
    result = operand1 * operand2;
}
else if (operation === 'div') {
    if (operand2 === 0) {
        alert('Поділ на нуль неможливий');
    } else {
        result = operand1 / operand2;
    }
}
else {
    alert('Невірна операція');
}
if (result !== undefined) {
    alert(`${operand1} ${operation} ${operand2} = ${result}`);
}