'use strict';
// Task 1
let object1= {
    name: "John",
    surname: "Smith"
};
object1.name = "Pete";
delete object1.name;
console.log(object1);

// Task 2
const user = {
    name: "John"
};
// Це працюватиме?
user.name = "Pete";
console.log(user.name);
// Так, це працюватиме, тому що ми змінюємо властивість в об'єкті, а не змінюємо константу

// Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
console.log("Працівники та їх зарплати:", salaries);
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(`Сума всіх зарплат: ${sum}`);