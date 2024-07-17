// callback fn inside setTimeout form closure with funct x()
//so it remembers refernce to i
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Javascript");
}
x();
