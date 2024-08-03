// function b forms closure with function a
// so memory of var x can't be freed
function a() {
  var x = 0;
  return function b() {
    console.log(x);
  };
}

var y = a();
//...1000s lines of code
// so memory of var x can't be freed, as x is needed here
y();
