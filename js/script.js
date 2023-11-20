function createTable() {
  const myTable = document.createElement('table');
  let count = 1;
  for (let i = 1; i <= 10; i++) {
    const tr = document.createElement('tr');
    for (let j = 1; j <= 10; j++) {
      const td = document.createElement('td');
      td.textContent = count++;
      tr.append(td);
    }
    myTable.append(tr);
  }
  document.body.append(myTable);
}
createTable();
