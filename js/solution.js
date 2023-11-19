const myUl = document.getElementById('ulId').children;
const nodeArray = [];
for (const node of myUl) {
  nodeArray.push(node);
}
console.log(nodeArray);
const myArray = Array.from(document.getElementById('ulId').children).map((li) => li.textContent);
console.log(myArray);

const addAtributeOne = document.querySelector('.ulClass li:first-child');
addAtributeOne.setAttribute('data-my-name', 'Kyryl');
console.log(addAtributeOne.getAttribute('data-my-name'));

const delAtribut = document.querySelector('#ulId');
delAtribut.removeAttribute('data-dog-tail');
console.log(`Повинно бути значення null:${delAtribut.getAttribute('data-dog-tail')}`);

const lastLi = document.querySelector('.ulClass li:last-child');
lastLi.textContent = 'Привіт, мене звати Кирил';
