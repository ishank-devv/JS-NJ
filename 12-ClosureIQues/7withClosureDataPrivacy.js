// wrapping inside closure for Data privacy
function counter() {
  var count = 0;
  return function incrementCounter() {
    count++;
    console.log(count);
  };
}
//now count is hidden, nobody from outside can access
//this count- DATA HIDING
// console.log(count); // ReferenceError: count is not defined

//incrementing count
var counter1 = counter();
counter1(); // 1
counter1(); // 2

//this will be fresh counter2, a seprate counter
var counter2 = counter();
counter2(); // 1
counter2(); // 2
