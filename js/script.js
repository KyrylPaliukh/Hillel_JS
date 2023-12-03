(function () {
  const saveData = (key, data = null) => {
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  };
  const getData = (key) => {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  };
  const prefillForm = (form) => {
    const data = getData('formData');
    if (data === null) return;
    form
      .querySelectorAll('input, textarea, select')
      .forEach((input) => {
        input.value = data[input.name];
      });
  };
  const formHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const { target } = e;
    const data = {};
    target
      .querySelectorAll('input, textarea, select')
      .forEach((item) => data[item.name] = item.value);
    saveData('formData', data);
  };
  const displayData = () => {
    const dataList = document.getElementById('dataList');
    const noDataMessage = document.getElementById('noDataMessage');

    const data = getData('formData');

    if (data) {
      noDataMessage.style.display = 'none';

      for (const key in data) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
        dataList.appendChild(listItem);
      }
    } else {
      noDataMessage.style.display = 'block';
    }
  };
  const loadedHandler = () => {
    const form = document.querySelector('#form');
    if (form) {
      prefillForm(form);
      form.addEventListener('submit', formHandler);
    } else {
      displayData();
    }
  };
  document.addEventListener('DOMContentLoaded', loadedHandler);
}());
