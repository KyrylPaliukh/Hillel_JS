function counter(number = 0) {
  let value = number;
  return {
    increase() {
      value++;
    },
    decrease() {
      value--;
    },
    value() {
      return value;
    },
  };
}
const counter1 = counter(10);
const counter2 = counter(5);

counter1.increase();
counter1.increase();

counter2.increase();
counter2.decrease();
console.log(counter1.value());
console.log(counter2.value());
