//hoisting: trying to access var and functions before initialization

console.log(x); // Undefined
console.log(getName);
// ƒ getName() {
//console.log("Hey JS");
//}
getName(); // hey JS

var x = 7;

function getName() {
  console.log("Hey JS");
}
