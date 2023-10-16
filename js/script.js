function padString(str, length, symbol = '*', append = true) {
  if (typeof str !== 'string') {
    return 'Неправильний рядок';
  }
  if (typeof length !== 'number') {
    return 'Невірне число';
  }
  if (typeof symbol !== 'string') {
    return 'Неправильний символ';
  }
  if (typeof append !== 'boolean') {
    return 'Невірне значення';
  }
  if (str.length >= length) {
    return str.substr(0, length);
  }
  const padding = symbol.repeat(length - str.length);
  if (append) {
    return str + padding;
  }
  return padding + str;
}
console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));
console.log(padString('hello', 'invalid', '*'));
console.log(padString(+'1', 'example'));
console.log(padString('hello', 2, '*', 9));
console.log(padString('hello', 2, +'2', 9));
