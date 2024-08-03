//scalable way to do increment or decrement
//still data is hidden and forms a closure
//constructor funct starts with captical letter
function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}
//now count is hidden, nobody from outside can access
//this count- DATA HIDING
// console.log(count);// ReferenceError: count is not defined

//better way
// use new keyword for "Constructor Function"
var counter1 = new Counter();
counter1.incrementCounter(); // 1
counter1.incrementCounter(); // 2
counter1.decrementCounter(); // 1
