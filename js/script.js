const mainFunction = function (callback) {
  const number1 = +prompt('Введіть число');
  const number2 = +prompt('Введіть ступінь числа');
  callback(number1, number2);
};
const exponentiation = function (number, degree) {
  const result = number ** degree;
  alert(`Результат: ${result}`);
};

mainFunction(exponentiation);
