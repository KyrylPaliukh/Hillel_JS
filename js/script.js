'use strict';
let a = +prompt("Введіть число a:");
let b = +prompt("Введіть число b:");
let num = +prompt("Введіть число від 1 до 4:");
let resulta = a === 0 ? "Вірно" : "Невірно";
console.log(`чісло a дорівнює нулю - ${resulta}`);

let resultb = a > 0 ? "Вірно" : "Невірно";
console.log(`чісло a більше за нуль - ${resultb}`);

let resultc = a < 0 ? "Вірно" : "Невірно";
console.log(`чісло a меншe за нуль - ${resultc}`);

let resultd = a >= 0 ? "Вірно" : "Невірно";
console.log(`чісло a більшe або дорівнює нулю - ${resultd}`);

let resultq = a <= 0 ? "Вірно" : "Невірно";
console.log(`чісло a менше або дорівнює нулю - ${resultq}`);

let resultw = a != 0 ? "Вірно" : "Невірно";
console.log(`чісло a не дорівнює нулю - ${resultw}`);

let resulte = a === "test" ? "Вірно" : "Невірно";
console.log(`чісло a дорівнює "test" - ${resulte}`);

let resultr = a === "1" ? "Вірно" : "Невірно";
console.log(`чісло a дорівнює "1" і за значенням і типом - ${resultr}`);

let resultt = a > 0 && a < 5 ? "Вірно" : "Невірно";
console.log(`чісло a більшe за нуль і менше 5-ти - ${resultt}`);

let resulty = a === 0 || a === 2 ? a + 7 : a / 10;
console.log(`змінна a дорівнює нулю або дорівнює двом, додайте до неї 7, інакше поділіть її на 10. Виведіть нове значення змінної на екран  ${resulty}`);

let resultu = (a <= 1 && b >= 3) ? (a + b) : (a - b);
console.log(`змінна a дорівнює або менше 1, а змінна b більша або дорівнює 3, то виведіть суму цих змінних, інакше виведіть їх різницю (результат віднімання) ${resultu}`);

let resulti = ((a > 2 && a < 11) || (b >= 6 && b <= 14)) ? 'Вірно' : 'Невірно';
console.log(`змінна a більше 2-х і менше 11-ти, або змінна b більша або дорівнює 6-ти і менше 14-ти- ${resulti}`);

switch (num) {
    case 1:
        console.log("Сезон: Зима");
        break;
    case 2:
        console.log("Сезон: Весна");
        break;
    case 3:
        console.log("Сезон: Літо");
        break;
    case 4:
        console.log("Сезон: Осінь");
        break;
    default:
        console.log("Невідомий сезон");
}