function trackObjects() {
  const trackedObjects = new WeakSet();

  return function (obj) {
    if (trackedObjects.has(obj)) {
      return true;
    }
    trackedObjects.add(obj);
    return false;
  };
}
const track = trackObjects();

const obj1 = { name: 'Object 1' };
const obj2 = { name: 'Object 2' };

console.log(track(obj1));
console.log(track(obj1));
console.log(track(obj2));
