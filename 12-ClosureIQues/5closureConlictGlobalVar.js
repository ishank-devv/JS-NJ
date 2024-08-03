// has conflicting name Global variable let a = 100;

// As inner function forms closure with its outer environment
// console.log(a) inside inner() will look for a inside
// itself first, then will look into its parent's scope( it has found a under outest)
// then in global scope
function outest(b) {
  let c = 30;
  function outer(b) {
    function inner() {
      console.log(a, b, c); // 20 "Hello World" 30, we can access c here
    }
    let a = 20; // function inner still forms a closure with let a and let b and let c even let is block scope
    return inner;
  }
  return outer;
}
let a = 100; // a is already in scope chain of inner(), so it will print a = 20 and ignore this
var close = outest()("Hello World");
close();
