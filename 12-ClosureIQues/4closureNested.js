//relation to scope chain and closure

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

var close = outest()("Hello World");
close();
