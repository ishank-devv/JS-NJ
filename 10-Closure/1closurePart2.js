// closure- function along with its scope

function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

// function y() forms a closure along with scope of x() and z()
//( ie closure (x)  and closure(z) )
