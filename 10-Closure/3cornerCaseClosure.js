function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
console.log(z);
z();

//function( function y()) along with its lexical scope(local memory + parent's
// lexical environment(means reference to a is returned, not value of a))
//bundled together forms a closure

//so when a changes its value, line 4 will print updated value which is 100
