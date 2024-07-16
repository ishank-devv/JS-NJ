function a() {
  var ascope = 15;
  b();
  function b() {
    console.log(g);
    console.log(ascope);
  }
}

var g = 10;
a();
console.log(ascope); //ascope is not defined
