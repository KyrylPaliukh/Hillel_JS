const myUl = document.getElementById('ulId').children;
for (const node of myUl) {
  console.log(node);
}
console.log(`Загальна кількість елементів: ${myUl.length}`);
const myArray = Array.from(document.getElementById('ulId').children).map((li) => li.textContent);
console.log(myArray);
