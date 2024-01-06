function Person(name, age) {
  this.name = name;
  this.age = age;

  this.displayInfo = function () {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  };
}
function Car(brand, model, year, licensePlate, owner) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.licensePlate = licensePlate;
  this.owner = (owner.age >= 18) ? owner : null;

  this.displayInfo = function () {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
    if (this.owner) {
      console.log('Власник:');
      this.owner.displayInfo();
    } else {
      console.log('Власник не зазначений або неповнолітній.');
    }
  };
}
const person1 = new Person('Іван', 25);
const person2 = new Person('Марія', 17);

const car1 = new Car('Toyota', 'Camry', 2022, 'AB1234', person1);
const car2 = new Car('Honda', 'Civic', 2019, 'BC5678', person2);

car1.displayInfo();
car2.displayInfo();
