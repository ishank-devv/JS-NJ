function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);

//we're using z outside of x()( outside of x's lexcical scope)
//here closure comes into the picture
//function y() which is being returned and stored in z, remembers/maintain
//its lexical scope i.e lexical scope of function y() contains var a = 7 ( or closure(x))
//which means along with function y(), closure(x)( a function binds together with its lexical scope)
//was returned as well and stored in z
z(); //7
