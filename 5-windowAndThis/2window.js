var a = 10;
function b() {
  var x = 10;
}
console.log(window.a); //10
console.log(a); //10
console.log(this.a); //10
console.log(x); // RefrenceError: x is "not defined"

//window.a === a === this.a( pointing/refering to same place in js in browser)
