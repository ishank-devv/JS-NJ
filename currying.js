//Regular funct
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Curried function
function add(a) {
  return function (b) {
    return a + b;
  };
}
console.log(add(2)(3)); // 5

//2nd example
function greet(greeting) {
  return function (name) {
    return greeting + ", " + name + "!";
  };
}
console.log(greet("Hello")("Ishu")); // "Hello, Ishu!"

// Real-World Example: Logger
const log = (level) => (message) => console.log(`[${level}]: ${message}`);

const info = log("INFO");
const error = log("ERROR");

info("Server started"); // [INFO]: Server started
error("Something broke"); // [ERROR]: Something broke

//Implement a curried function sum that can be called like this:
// https://chatgpt.com/share/68711ae5-9ca0-8005-84ac-0a3dad3826d0
sum(1)(2)(3); // 6
sum(4)(5)(6)(7); // 22
//solution
function sum(a) {
  let total = a;

  function inner(b) {
    total += b;
    return inner;
  }

  inner.toString = function () {
    return total;
  };

  inner.valueOf = function () {
    return total;
  };

  return inner;
}
console.log(sum(1)(2)(3)); // 6
console.log(sum(4)(5)(6)(7)); // 22
