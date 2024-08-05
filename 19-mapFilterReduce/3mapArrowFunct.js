//map is used to transform an array
// means transform each and every value of the array and get a new array out of it

const arr = [5, 1, 3, 2, 6];

// const output = arr.map(transformationLogic);
//Arrow/Anonymous funct
const outputDouble = arr.map((x) => {
  return x * 2;
});
console.log(outputDouble);

//shorter- Arrow function-one line
const outputDoubleOneLine = arr.map((x) => x * 2);
console.log(outputDoubleOneLine);
