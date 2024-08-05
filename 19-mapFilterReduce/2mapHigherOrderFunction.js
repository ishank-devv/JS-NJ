//map is used to transform an array
// means transform each and every value of the array and get a new array out of it

const arr = [5, 1, 3, 2, 6];

// const output = arr.map(transformationLogic);
const outputDouble = arr.map(function double(x) {
  return x * 2;
});
console.log(outputDouble);

const outputTriple = arr.map(function triple(x) {
  return x * 3;
});
console.log(outputTriple);

const outputBinary = arr.map(function binary(x) {
  return x.toString(2);
});
console.log(outputBinary);
