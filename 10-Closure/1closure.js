//function( function y()) along with its lexical scope(local memory + parent's lexical environment)
//bundled together forms a closure (ie. closure(x))
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
