class User {
  #id = null;

  name = null;

  phone = null;

  email = null;

  website = null;

  constructor({
    id, name, phone, email, website,
  }) {
  }

  static isUser(obj) {
  }

  get id() {
    return this.#id;
  }
}
