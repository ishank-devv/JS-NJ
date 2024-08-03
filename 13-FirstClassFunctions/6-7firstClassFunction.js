//1. we can pass functions inside other functions as an
//argument

//eg1: Passing function(4. anonymous) as an argument
var a = function (param1) {
  console.log(param1);
};
a(function () {});

//eg2: Passing function(1. function statement) as an argument
var b = function (param1) {
  console.log(param1);
};
function xyz() {}
b(xyz);

//2. we can return a function from a function

// eg1: returning function ( 4. anonymous ) from a function
var c = function (param1) {
  return function () {};
};
console.log(c());

// eg2: returning Function( 1. function statement) from a function
var c = function (param1) {
  return function xyz() {};
};
console.log(c());

//6-7
// FIRST CLASS FUNCTION( programming concept)/FIRST CLASS CITIZENS
// ability of functions to be used as values
// ie. can be passed as arguments to another functions
// and can be returned from the functions
