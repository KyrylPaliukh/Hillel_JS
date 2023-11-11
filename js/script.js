function customBind(func, context) {
  return function (...args) {
    return func.apply(context, args);
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
