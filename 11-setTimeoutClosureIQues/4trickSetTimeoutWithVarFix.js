function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
  console.log("Javascript");
}
x();

//So here we're fixing what was happening in 2trickSetTimeout file with var
//without using let
//here, we using function close(x) and passing value of i through it
//so everytime new value of i gets updated , it makes a seprate closure at each step with function x()
