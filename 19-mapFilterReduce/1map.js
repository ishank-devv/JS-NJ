//map is used to transform an array
// means transform each and every value of the array and get a new array out of it

const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x) {
  return x.toString(2);
}

// const output = arr.map(transformationLogic);
const outputDouble = arr.map(double);
console.log(outputDouble);

const outputTriple = arr.map(triple);
console.log(outputTriple);

const outputBinary = arr.map(binary);
console.log(outputBinary);
