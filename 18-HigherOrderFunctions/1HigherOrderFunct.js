// Key Concepts of Functional Programming

// 	1.	Pure Functions: A function that, given the same input, will always return the same output and does not have side effects (e.g., modifying global state or variables outside the function).
// 	2.	Higher-Order Functions: Functions that take other functions as arguments or return them as results.
// 	3.	First-Class Functions: Functions in JavaScript are first-class citizens, meaning they can be stored in variables, passed as arguments, and returned from other functions.
// 	4.	Immutability: Avoiding changes to data. Instead of modifying an object, create a new object with the changed data.
// 	5.	Function Composition: Combining simple functions to build more complex ones.

// higher order functions- funct which takes another funct as
// an argument or returns a function from it
// X-> callback functions
// Y-> Higher Order Functions
//this is possible because functions are first class citizens in javascript

function x() {
  console.log("Namaste");
}

function y(x) {
  x();
}
