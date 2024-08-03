// function b forms a closure with both x and z variable
function a() {
  var x = 0,
    z = 10; // when debugger is on line6 and do console.log(z) // ReferenceError: z is not defined
  return function b() {
    console.log(x);
  };
}

//But once function b() is returned and forms a closure with function a()
//so it forms closure with x variable only and z got garbage collected smartly
var y = a();
//.. 1000s of line of code
y();
