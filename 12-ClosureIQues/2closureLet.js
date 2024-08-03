function outer() {
  function inner() {
    console.log(a); // 20
  }
  let a = 20; // function inner still forms a closure with let a' even let is block scope
  return inner;
}

outer()();
