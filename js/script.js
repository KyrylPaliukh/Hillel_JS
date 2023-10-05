'use strict';
const YEAR = +prompt("Введіть ваш вік:");
const CITY = prompt("Введіть в якому місті ви живете:");
const SPORT = prompt("Введіть ваш улюблений вид спорту:");
let message = "";
if(YEAR !== null && !isNaN(YEAR) && YEAR !== 0 && CITY !== null && CITY !== "" && SPORT !== null && SPORT !== "") {
    message += `Твій вік: ${YEAR} років.`;
    if (CITY === "Київ") {
        message += "Ти живеш у столиці України.";
    } else if (CITY === "Вашингтон") {
        message += "Ти живеш у столиці США."
    } else if (CITY === "Лондон") {
        message += "Ти живеш у столиці Великої Британії.";
    } else {
        message += `Ти живеш у місті ${CITY}.`;
    }
    if (SPORT === "футбол") {
        message += "Хочеш стати Зіданом?";
    } else if (SPORT === "баскетбол") {
        message += "Хочеш стати Джорданом?";
    } else if (SPORT === "бокс") {
        message += "Хочеш стати Кличком?";
    } else {
        message += `Грай із задоволенням у ${SPORT}.`;
    }
    alert(message);
} else if (YEAR === null || YEAR === 0){
        alert("Шкода, що Ви не захотіли ввести свій вік");
} else if (CITY === null || CITY === "") {
        alert("Шкода, що Ви не захотіли ввести своє місто");
} else if (SPORT === null || SPORT === "") {
        alert("Шкода, що Ви не захотіли ввести свій спорт");
} else {
    alert("Ой, все! Уважно читай");
}