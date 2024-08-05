const arr = [5, 1, 3, 2, 6];

//max- using normal function
//intially max = 0, assuming that arr would be non empty and it always have +ve number
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));

//reduce function is used at a place where
//you have to take all the elements of an array and come
//up with a single value/obj out of them

// const output = arr.reduce(reduceLogic(acc, curr), intial value of acc);
// curr -> arr[i]
// acc -> max
const outputReduce = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(outputReduce);
