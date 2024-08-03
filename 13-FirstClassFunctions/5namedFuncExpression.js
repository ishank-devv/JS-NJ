//2. Function Expression
//here, function acts like value. you're intialising var b with a value.
var b = function () {
  console.log("b called: 2. Function Expression");
};
b();

//5. Named function expression
// is same as 2. Function Expression but instead of using
//anonymous Function there, we're using "Named Function"

var e = function xyz() {
  console.log("e called: 5. Named Function Expression");
  //can access xyz here but not ouside/global scope
  console.log(xyz);
};
e();
// corner case of 5. Named function expression
xyz(); // ReferenceError: xyz is not defined
//EXPLAINATION
//xyz is not available in outer/global scope,
//so we can't access it
