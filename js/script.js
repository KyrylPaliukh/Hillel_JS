var str = "Hello, world!";
var num = 42;
var bool = true;
var n = null;
var u = undefined;
var obj = { key: "value" };
var anyType = "any type can be anything";
var v = undefined;
var unknownType = "unknown type";
console.log(str);
console.log(num);
console.log(bool);
console.log(n);
console.log(u);
console.log(obj);
console.log(anyType);
console.log(v);
console.log(unknownType);
var person = {
    name: "John",
    age: 30,
    hobbies: ["reading", "traveling"]
};
console.log(person);
var sum = function (a, b) { return a + b; };
console.log(sum(3, 5));
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 3] = "Thursday";
    WeekDays[WeekDays["Friday"] = 4] = "Friday";
    WeekDays[WeekDays["Saturday"] = 5] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 6] = "Sunday";
})(WeekDays || (WeekDays = {}));
var currentDay = WeekDays.Friday;
console.log("Current day is:", WeekDays[currentDay]);
