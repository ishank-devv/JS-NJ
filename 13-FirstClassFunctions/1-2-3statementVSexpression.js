// Major diff b/w 1. Function Statement and 2. Function Expression
// is HOISTING

// testing HOISTING
a();
b(); // TypeError: b is not a function

//1. Function Statement( aka 3. Function Declaration)
function a() {
  console.log("a called: 1. Function Statement");
}
// a();

//2. Function Expression
//here, function acts like value. you're intialising var b with a value.
var b = function () {
  console.log("b called: 2. Function Expression");
};
// b();

// EXPLAINATION
//1. Function Statement
// during hoisting/memory creation phase a is created in memory
// and function is assigned to a

//2. Function Expression
// var b is treated like any other variable, it is "undefined" intially
// untill the code hits line 16, then only function is assigned to var b
