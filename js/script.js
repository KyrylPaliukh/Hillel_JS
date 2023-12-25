(function () {
  const CONSTANTS = Object.freeze({
    todoFormSelector: '#todoForm',
    todoContainerSelector: '#todoItems',
    dataKey: 'formData',
  });

  const dataStorage = {
    _currentId: 0,

    get currentId() {
      return this._currentId;
    },

    set currentId(value) {
      this._currentId = value;
    },

    get savedData() {
      const data = JSON.parse(localStorage.getItem(CONSTANTS.dataKey));
      return data || [];
    },

    set savedData(data) {
      localStorage.setItem(CONSTANTS.dataKey, JSON.stringify(data));
    },
  };
  function renderElement(data) {
    const template = createTemplate(data);
    renderTodoItem(template);
  }

  function renderTodoItem(elementToRender) {
    const todoContainer = document.querySelector(CONSTANTS.todoContainerSelector);
    todoContainer.prepend(elementToRender);
    return elementToRender;
  }

  function createTemplate(data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.setAttribute('data-todo-item', data.id);

    const taskWrapper = document.createElement('div');
    taskWrapper.className = 'taskWrapper';
    wrapper.appendChild(taskWrapper);

    const taskHeading = document.createElement('div');
    taskHeading.className = 'taskHeading';
    taskHeading.innerHTML = data.title;
    taskWrapper.appendChild(taskHeading);

    const taskDescription = document.createElement('div');
    taskDescription.className = 'taskDescription';
    taskDescription.innerHTML = data.description;
    taskWrapper.appendChild(taskDescription);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.innerText = 'X';
    deleteBtn.setAttribute('data-remove-btn', '');
    taskWrapper.appendChild(deleteBtn);

    return wrapper;
  }

  function resetForm() {
    document.querySelector(CONSTANTS.todoFormSelector).reset();
  }

  function removeElement(todoId) {
    document.querySelector(`[data-todo-item="${todoId}"]`).remove();
  }

  function formHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    const { target } = e;
    const data = Array.from(target.querySelectorAll('input, textarea')).reduce((acc, item) => {
      acc[item.name] = item.value;
      return acc;
    }, {});

    const savedData = saveData(data);

    if (savedData) {
      renderElement(savedData);
      resetForm();
    }
  }

  function removeTodoItemHandler(e) {
    e.stopPropagation();
    const { target } = e;
    if (!target.hasAttribute('data-remove-btn')) return;
    const todoId = +target.closest('[data-todo-item]').getAttribute('data-todo-item');
    const removedElement = removeElementById(todoId);

    if (removedElement) {
      removeElement(todoId);
      return;
    }

    alert(`Cannot remove element ${removedElement.title}`);
  }

  function loadedHandler() {
    initId();
    const form = document.querySelector(CONSTANTS.todoFormSelector);
    form.addEventListener('submit', formHandler);

    dataStorage.savedData.forEach((item) => renderElement(item));

    const todoContainer = document.querySelector(CONSTANTS.todoContainerSelector);
    todoContainer.addEventListener('click', removeTodoItemHandler);
  }

  function init() {
    document.addEventListener('DOMContentLoaded', loadedHandler);
  }

  function saveData(data) {
    dataStorage.currentId++;
    const dataCopy = { id: dataStorage.currentId, ...data };
    const { savedData } = dataStorage;
    savedData.push(dataCopy);

    try {
      dataStorage.savedData = savedData;
      return savedData.at(-1);
    } catch (e) {
      return false;
    }
  }

  function removeElementById(todoId) {
    const savedElements = dataStorage.savedData;
    const index = savedElements.findIndex(({ id }) => todoId === id);
    const [removedElement] = savedElements.splice(index, 1);
    try {
      dataStorage.savedData = savedElements;
      return removedElement;
    } catch (e) {
      console.log('Cannot remove element', removedElement);
      return false;
    }
  }

  function initId() {
    const items = dataStorage.savedData;
    if (!items.length) return;
    dataStorage.currentId = +items.at(-1).id;
  }

  init();
}());
