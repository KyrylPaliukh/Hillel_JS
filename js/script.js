function cacheComplexCalculations() {
  const cache = new WeakMap();

  return function (obj, complexFunction) {
    if (cache.has(obj)) {
      return cache.get(obj);
    }
    const result = complexFunction(obj);
    cache.set(obj, result);
    return result;
  };
}
const calculateArea = (rectangle) => rectangle.width * rectangle.height;

const cacheResult = cacheComplexCalculations();

const rectangle1 = { width: 10, height: 20 };
const rectangle2 = { width: 15, height: 25 };

console.log(cacheResult(rectangle1, calculateArea));
console.log(cacheResult(rectangle1, calculateArea));
console.log(cacheResult(rectangle2, calculateArea));
console.log(cacheResult(rectangle2, calculateArea));
