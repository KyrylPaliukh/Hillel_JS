function generateList(array) {
  const ul = document.createElement('ul');
  for (const item of array) {
    const li = document.createElement('li');
    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      li.textContent = item;
    }
    ul.appendChild(li);
  }
  return ul;
}
const data = [1, 2, [1.1, 1.2, 1.3], 3];
const list = generateList(data);
document.body.appendChild(list);
