//hoisting: trying to access var and functions before initialization

console.log(getName2);
// ƒ getName() {
//console.log("Hey JS");
//}
getName2(); // Hey Normal Function

console.log(x); // Undefined
console.log(getName); //Undefined
getName(); //TypeError: getName is not a function

var x = 7;
//"Arrow function behaves like variable in respect to rules of hoisting
//During Memory allocation phase, just like it allocates undefined to X, it allocates undefined to getName"
var getName = () => {
  console.log("Hey JS");
};

//Normal Function- behaves like a funct
function getName2() {
  console.log("Hey Normal Function");
}
