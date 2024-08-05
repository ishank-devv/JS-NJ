const arr = [5, 1, 3, 2, 6];

//sum- using normal function
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

//reduce function is used at a place where
//you have to take all the elements of an array and come
//up with a single value/obj out of them

// const output = arr.reduce(reduceLogic(acc, curr), intial value of acc);
// curr -> arr[i]
// acc -> sum
const outputReduce = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(outputReduce);
