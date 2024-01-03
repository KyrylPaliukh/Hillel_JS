function* reverseArrayIterator(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i];
  }
}
function* fibonacciGenerator() {
  let a = 0; let
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
function* objectPropertiesIterator(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      yield key;
    }
  }
}
const myArray = [1, 2, 3, 4, 5];
const reverseIterator = reverseArrayIterator(myArray);

console.log(reverseIterator.next().value);
console.log(reverseIterator.next().value);
console.log(reverseIterator.next().value);

const fibonacci = fibonacciGenerator();

console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);
console.log(fibonacci.next().value);

const myObject = { a: 1, b: 2, c: 3 };
const objIterator = objectPropertiesIterator(myObject);

console.log(objIterator.next().value);
console.log(objIterator.next().value);
console.log(objIterator.next().value);
