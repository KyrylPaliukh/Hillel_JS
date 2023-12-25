const user = { name: 'Kyryl' };

Object.defineProperty(user, 'name', {
  writable: false,
});

Object.defineProperty(user, 'age', {
  value: 30,
  enumerable: false,
});

console.log('for...in loop:');
for (const key in user) {
  console.log(key);
}

console.log('\nObject.keys():');
console.log(Object.keys(user));

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    const parts = value.split(' ');
    this.name = parts[0] || '';
    this.surname = parts[1] || '';
  },
});

console.log('\nРозширене Завдання:');
user.fullName = 'Kyryl Paliukh';
console.log('Name:', user.name);
console.log('Surname:', user.surname);

Object.freeze(user);

try {
  Object.defineProperty(user, 'name', {
    writable: true,
  });
} catch (error) {
  console.log('\nДодаткове Завдання:');
  console.log('Спроба змінити дескриптор властивості name не вдалася:', error.message);
}
