function insertWordInto(initialString) {
  const words = initialString.split(' ');
  return function (wordToInsert) {
    // Перевірити, чи вже існують слова в рядку
    if (words.length === 0) {
      return wordToInsert;
    }
    const randomIndex = Math.floor(Math.random() * (words.length - 1)) + 1;
    words.splice(randomIndex, 0, wordToInsert);
    const resultString = words.join(' ');

    return resultString;
  };
}
const insert = insertWordInto('hello world');
const result = insert('Dnipro');
console.log(result);

const secondResult = insert('Kyiv');
console.log(secondResult);

const thirdResult = insert('Lviv');
console.log(thirdResult);
