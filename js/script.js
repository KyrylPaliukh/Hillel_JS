const arr = ['Vlad', 'Kyryl', 'Maksim', 'Olena', 'Ksenia', 'Tetiana', 'Sergii'];
function indexOffCustom(arr, str, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === str) {
      return i;
    }
  }
  return -1;
}
const resultIndexOffCustom = indexOffCustom(arr, 'Kyryl');
console.log(resultIndexOffCustom);

function lastIndexOffCustom(arr, str, from = arr.length - 1) {
  for (let i = from; i >= 0; i--) {
    if (arr[i] === str) {
      return i;
    }
  }
  return -1;
}
const resultLastIndexOffCustom = lastIndexOffCustom(arr, 'Kyryl');
console.log(resultLastIndexOffCustom);

function findCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}
function findIndexCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}
const numbers = [1, 2, 3, 4, 5];
const firstEven = findCustom(numbers, (number) => number % 2 === 0);
console.log(firstEven);

const firstIndex = findIndexCustom(numbers, (number) => number % 2 === 0);
console.log(firstIndex);

function includesx(arr, searchElement, fromIndex = 0) {
  if (fromIndex < 0) {
    fromIndex = Math.max(0, arr.length + fromIndex);
  }
  for (let i = fromIndex; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return true;
    }
  }
  return false;
}
const kyryl = includesx(arr, 'Kyryl');
console.log(kyryl);
const john = includesx(arr, 'John');
console.log(john);
function everyCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
const allNumbers = everyCustom(numbers, (number) => number % 2 !== 0);
console.log(allNumbers);
function someCustom(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}
const someNumbers = someCustom(numbers, (number) => number % 2 !== 0);
console.log(someNumbers);
