let a = 20; // SCRIPE SCOPE
{
  let a = 30; // legal (BLOCK SCOPE)
  console.log(a);
}

var b = 30; //GLOBAL SCOPE
{
  let b = 40; // legal (BLOCK SCOPE)
  console.log(b);
}
console.log(b);

const c = 50; //SCRIPT SCOPE
{
  const c = 60; // legal (BLOCK SCOPE)
  console.log(c);
}

var d = 60; //GLOBAL SCOPE
{
  var d = 70;
  console.log(d); // GLOBAL SCOPE
}
console.log(d);

// let is block scope
// var is function scope
// thats why they're not interferring
let e = 120; //SCRIPT SCOPE
function x() {
  var e = 130;
  console.log(e); //LOCAL SCOPE
}
console.log(e);
x();
console.log(e);
