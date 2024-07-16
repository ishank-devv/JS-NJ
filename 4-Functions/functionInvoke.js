var x = 1; //part of GEC( local memory )
a(); //new execution context( which is independent of GEC, has its own memory allocation and code execution phases) is created when function a() is invoked, after completing the execution of function a(), this EC will vanish( pop off from the stack)
b(); //Another new execution context(has its own memory allocation and code execution phases)( which is independent of GEC and execution context of function a()) is created when function b() is invoked, , after completing the execution of function b(), this EC will vanish( pop off from the stack)
console.log(x); //due to GEC, after this line is executed, gec will vanish( pop off from the call stack)

function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
