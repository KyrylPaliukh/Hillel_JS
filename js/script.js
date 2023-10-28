const length = +prompt('Введіть довжину масиву');
const array = [];
for (let i = 0; i < length; i++) {
  const element = +prompt(`Введіть елемент масиву ${i}`);
  array.push(element);
}
console.log('Масив:', array);
array.sort((a, b) => a - b);
console.log('Відсортований масив:', array);
array.splice(2, 3);
console.log('Масив після видалення:', array);
