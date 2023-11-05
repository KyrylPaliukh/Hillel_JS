function getFactorial(number) {
  if (number === 0) {
    return 1;
  }
  return number * getFactorial(number - 1);
}
const factorialOf3 = getFactorial(3);
console.log(factorialOf3);

const num = +prompt('Введіть число, яке потрібно звести у ступінь:');
const degree = +prompt('Введіть ступінь, в яке потрібно звести число:');
function pow(num, degree) {
  if (degree === 0) {
    return 1;
  }
  return num * pow(num, degree - 1);
}
const result = pow(num, degree);
console.log(`Результат: ${result}`);

function add(a, b) {
  if (b === 0) {
    return a;
  }
  return add(a ^ b, (a & b) << 1);
}

const sums = add(5, 3);
console.log(sums);
