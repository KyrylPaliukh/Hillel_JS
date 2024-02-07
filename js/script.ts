let str: string = "Hello, world!";
let num: number = 42;
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
let obj: object = { key: "value" };
let anyType: any = "any type can be anything";
let v: void = undefined;

let unknownType: unknown = "unknown type";

console.log(str);
console.log(num);
console.log(bool);
console.log(n);
console.log(u);
console.log(obj);
console.log(anyType);
console.log(v);
console.log(unknownType);

interface Person {
  name: string;
  age: number;
  hobbies: string[];
}

const person: Person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "traveling"]
};

console.log(person);

const sum: (a: number, b: number) => number = (a, b) => a + b;
console.log(sum(3, 5));

enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const currentDay: WeekDays = WeekDays.Friday;
console.log("Current day is:", WeekDays[currentDay]);
