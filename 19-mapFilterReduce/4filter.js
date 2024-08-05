//used to filter the values inside the array after
// each value in array is checked against the filterLogic
const arr = [5, 1, 3, 2, 6];

//odd
//if result is true(1) then return x, if result is false(0) then don't return
function isOdd(x) {
  console.log("result", x, x % 2);
  return x % 2;
}

//even
function isEven(x) {
  return x % 2 === 0;
}

//greater than 4
function greaterThan4(x) {
  return x > 4;
}

//filter odd values
// const output = arr.filter(filterLogic);
const outputOdd = arr.filter(isOdd);
console.log(outputOdd);

const outputEven = arr.filter(isEven);
console.log(outputEven);

const outputGreaterThan4 = arr.filter(greaterThan4);
console.log(outputGreaterThan4);

//arrow function
const outputGreaterThan4Arrow = arr.filter((x) => {
  return x > 4;
});
console.log(outputGreaterThan4Arrow);
