const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
console.log(array.length);
let elementPositives = 0;
let numberPositives = 0;
array.forEach((element) => {
  if (element > 0) {
    elementPositives += element;
    numberPositives++;
  }
});
console.log('Сума позитивних елементів:', elementPositives);
console.log('Кількість позитивних елементів:', numberPositives);

let minElement = array[0];
let maxElement = array[0];
let minIndex = 0;
let maxIndex = 0;
array.forEach((element, index) => {
  if (element < minElement) {
    minElement = element;
    minIndex = index;
  }
  if (element > maxElement) {
    maxElement = element;
    maxIndex = index;
  }
});
console.log(`Мінімальний елемент: ${minElement}, його порядковий номер: ${minIndex}`);
console.log(`Максимальний елемент: ${maxElement}, його порядковий номер: ${maxIndex}`);

let elementNegative = 0;
array.forEach((element) => {
  if (element < 0) {
    elementNegative++;
  }
});
console.log('Кількість - елементів:', elementNegative);

let countOddPositive = 0;
let countEvenPositive = 0;
let sumEvenPositive = 0;
let sumOddPositive = 0;
let productOfPositives = 1;

array.forEach((element) => {
  if (element > 0) {
    if (element % 2 !== 0) {
      countOddPositive++;
      sumOddPositive += element;
    } else {
      countEvenPositive++;
      sumEvenPositive += element;
    }
    productOfPositives *= element;
  }
});
console.log(`Кількість непарних позитивних елементів: ${countOddPositive}`);
console.log(`Кількість парних позитивних елементів: ${countEvenPositive}`);
console.log(`Сума парних позитивних елементів: ${sumEvenPositive}`);
console.log(`Сума непарних позитивних елементів: ${sumOddPositive}`);
console.log(`Добуток позитивних елементів: ${productOfPositives}`);

let elementMax = array[0];
let elementMaxIndex = 0;
array.forEach((element, index) => {
  if (element > elementMax) {
    elementMax = element;
    elementMaxIndex = index;
  }
});
console.log(`Найбільший елемент: ${elementMax}`);
array.forEach((element, index) => {
  if (index !== elementMaxIndex) {
    array[index] = 0;
  }
});
console.log(`Масив з обнуленими іншими елементами: ${array}`);
