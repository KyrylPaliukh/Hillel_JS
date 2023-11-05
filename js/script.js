const arr = [
  1, 2, 3, 4, {},
  [1, 2, 3],
  [1, 2, 3],
  [3, 4,
    [5, 6, 7],
  ],
];

function outerFlat(arr) {
  const res = [];
  function flat(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  }

  flat(arr);
  return res;
}
console.log(outerFlat(arr));
console.log(outerFlat(arr));
