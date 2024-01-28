class PhoneBook {
  #contacts = [];

  #searchedUsers = [];

  #usersListSelector = null;

  #removeAttr = null;

  #callAttr = null;

  #modal = null;

  #callControllerInstance = null;

  constructor(users, usersListSelector, removeSelector = null, callSelector = null, modalSelector = null) {
    if (!PhoneBook.validateSelector(modalSelector)) throw new Error('modalSelector is not exist on page!');
    this.#modal = new bootstrap.Modal(modalSelector);
    if (!PhoneBook.validateSelector(usersListSelector)) throw new Error('usersListSelector is not exist on page!');
    this.#usersListSelector = document.querySelector(usersListSelector);
    if (!removeSelector) throw new Error('removeSelector is not defined');
    this.#removeAttr = removeSelector;
    if (!callSelector) throw new Error('callSelector is not defined');
    this.#callAttr = callSelector;

    this.#callControllerInstance = new CallController();

    users.forEach((user) => {
      this.addContact(user);
    });

    this.#setEvents();
  }

  addContact(user) {
    if (!PhoneBook.validateContact(user)) return null;
    this.#contacts.push(user);
    this.renderContact(this.#contacts.at(-1));
  }

  removeContact(contactId) {
    const index = this.#contacts.findIndex((item) => item.id === contactId);
    if (index !== -1) {
      this.#contacts.splice(index, 1);
      this.renderContacts();
    }
  }

  search(searchValue) {
    this.#searchedUsers = this.#contacts.filter((user) => {
      const lowerCaseName = (user.name || '').toLowerCase();
      const lowerCasePhone = (user.phone || '').toLowerCase();
      const lowerCaseEmail = (user.email || '').toLowerCase();
      return (
        lowerCaseName.includes(searchValue)
        || lowerCasePhone.includes(searchValue)
        || lowerCaseEmail.includes(searchValue)
      );
    });

    this.renderContacts();
  }

  #searchHandler = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();
    this.search(searchValue);
  };

  #endCallHandler = () => {
    this.#callControllerInstance.endCallByCaller();
  };

  #callHandler = ({ target }) => {
    const currentClickedBtn = target.closest(`[${this.#callAttr}]`);
    if (!currentClickedBtn) return;

    const contactTemplate = currentClickedBtn.closest('[data-user-id]');
    const contactId = +contactTemplate.getAttribute('data-user-id');
    const currentContact = this.#contacts.find((item) => item.id === contactId);

    if (currentContact && currentContact.name) {
      const callInfo = currentContact.name;

      document.querySelector('[data-abonent-name]').innerHTML = callInfo;

      this.#callControllerInstance.startCall(currentContact.phone, currentContact.name);

      this.#modal.show();
    } else {
      console.error('Error: Contact or contact name is undefined.');
    }
  };

  #changeCallStatusHandler = (callStatus) => {
    document.querySelector('[data-call-body]').innerHTML = callStatus;

    if (callStatus === Call.CALL_STATUSES.disconnect || callStatus === Call.CALL_STATUSES.rejected) {
      this.#modal.hide();
    }
  };

  #removeHandler = ({ target }) => {
    const currentClickedBtn = target.closest(`[${this.#removeAttr}]`);
    if (!currentClickedBtn) return;
    const contactTemplate = currentClickedBtn.closest('[data-user-id]');
    const contactId = +contactTemplate.getAttribute('data-user-id');
    this.removeContact(contactId);
  };

  renderContacts() {
    this.#usersListSelector.innerHTML = '';
    const contactsToRender = this.#searchedUsers.length > 0 ? this.#searchedUsers : this.#contacts;
    contactsToRender.forEach((user) => {
      this.renderContact(user);
    });
  }

  renderContact(user) {
    const isUserInContacts = this.#contacts.some((item) => user.id === item.id);
    if (!isUserInContacts) return null;
    const template = this.#createTemplate(user);
    this.#usersListSelector.appendChild(template);
  }

  #createTemplate({ id, name }) {
    const template = document.createElement('li');
    template.className = 'list-group-item d-flex justify-content-between align-items-center';
    template.setAttribute('data-user-id', id);

    template.innerHTML = `<span class="contacts__contact">${name}</span>
                            <div>
                                <button data-call type="button" class="btn btn-success">
                                    <i class="bi bi-telephone"></i>
                                </button>

                                <button data-remove type="button" class="btn btn-danger">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>`;

    return template;
  }

  static validateContact(user) {
    return !!user.id;
  }

  static validateSelector(selector) {
    return !!document.querySelector(selector);
  }

  #setEvents() {
    Call.addChangeStatusListener(this.#changeCallStatusHandler);
    document.querySelector('[data-end-call]').addEventListener('click', this.#endCallHandler);
    this.#usersListSelector.addEventListener('click', this.#removeHandler);
    this.#usersListSelector.addEventListener('click', this.#callHandler);
    document.getElementById('contacts-search').addEventListener('input', this.#searchHandler);
  }
}

const phoneBook = new PhoneBook(
  users,
  '.contacts__list ul',
  'data-remove',
  'data-call',
  '#exampleModal',
);
