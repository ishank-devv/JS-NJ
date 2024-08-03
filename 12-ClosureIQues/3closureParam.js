//inner also makes closure with b paramter
function outer(b) {
  function inner() {
    console.log(a, b); // 20 "Hello World"
  }
  let a = 20; // function inner still forms a closure with let a even let is block scope
  return inner;
}
var close = outer("Hello World");
close();
