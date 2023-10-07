'use strict';
let resultA = "";
for (let a = 20; a <= 30; a += 0.5) {
    resultA += a;
    if (a < 30){
        resultA += ", ";
    }
}
console.log(resultA);

for (let i = 10; i <= 100; i+= 10){
    let d = 27;
    let resultI = i * d;
    console.log(`${i} * ${d} = ${resultI}`);
}

const N =prompt("Введіть число, щоб з'ясувати, всі цілі числа від 1 до 100, квадрат яких не перевищує веденого числа");
for (let i = 1; i <= 100; i++) {
    let p = i * i;
    if (p <= N) {
        console.log(i);
    }
}

const NUMBER =prompt("Введіть число, щоб з'ясувати, чи є воно простим");
let isPrime = true;
if (NUMBER <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < NUMBER; i++) {
        if (NUMBER % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${NUMBER} є простим числом.`);
} else {
    console.log(`${NUMBER} не є простим числом.`);
}

const numberA = prompt("Введіть число, щоб з'ясувати, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь");
let exponent = 0;
let result = 1;
while (result < numberA) {
    exponent++;
    result *= 3;
}
if (result === numberA) {
    console.log(`${numberA} можна отримати шляхом зведення числа 3 у ступінь ${exponent}.`);
} else {
    console.log(`${numberA} не можна отримати шляхом зведення числа 3 у жодний ступінь.`);
}