function customBind(func, context) {
  return function () {
    const args = Array.from(arguments);
    context.a = func;
    const result = context.a(...args);
    delete context.a;
    return result;
  };
}
const obj = {
  x: 10,
  getX() {
    return this.x;
  },
};
const customBoundFunc = customBind(obj.getX, obj);
console.log(customBoundFunc());
