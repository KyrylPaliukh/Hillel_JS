'use strict';
let resultA = "";
let resultB = "";
for (let a = 10; a <= 20; a++){
    resultA += a;
    if (a < 20){
        resultA += ", ";
    }
}
console.log(resultA);
for (let b = 10; b <= 20; b++){
    resultB += b * b;
    if (b < 20){
        resultB += ", ";
    }
}
console.log(resultB);
for (let c = 1; c <= 10; c++){
        let d = 7;
        let resultC = c * d;
        console.log(`${c} * ${d} = ${resultC}`);
}
for (let q = 1; q <= 15; q++){
    let resultQ = (q * (q + 1)) / 2;
    console.log(resultQ);
}
let resultW = 1;
for (let w = 15; w <= 35; w++) {
    resultW *= w;
}
console.log(`Добуток чисел від 15 до 35: ${resultW.toLocaleString()}`);
let sumR = 0;
let countR = 0;
for (let i = 1; i <= 500; i++) {
    sumR += i;
    countR++;
}
let resultR = sumR / countR;
console.log(`Середнє арифметичне всіх цілих чисел від 1 до 500: ${resultR}`);

let sumT = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumT += i;
    }
}
console.log(`Сума парних чисел від 30 до 80: ${sumT}`);
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
let divisors = [];
let divisorsCount = 0;
let divisorsEvent = 0;
for (let i = 1; i <= 5; i++) {
    if (5 % i === 0) {
        divisors.push(i);
        if (i % 2 === 0) {
            divisorsCount++;
            divisorsEvent += i;
        }
    }
}
console.log(`Дільники числа 5: ${divisors}`);
console.log(`Кількість парних дільників: ${divisorsCount}`);
console.log(`Сума парних дільників: ${divisorsEvent}`);
for (let u = 1; u <= 10; u++){
    for (let j = 1; j <= 10; j++) {
        console.log(`${u} * ${j} = ${u * j}`);
    }
}