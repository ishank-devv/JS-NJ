//function along with its lexical scope(local memory + parent's lexical environment)
//bundled together forms a closure (ie. closure(x))

function outer() {
  var a = 10;
  function inner() {
    console.log(a);
    console.log(b);
  }
  var b = 20; // function inner still forms a closure with b
  return inner;
}

outer()();
