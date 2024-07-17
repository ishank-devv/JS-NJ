// function inside setTimeout remember reference to i,
//( bacause it forms closure with function x)
// When timer expires value of i is already 6 as for loop was running,
// before 5 setTimeout callbacks start executing at 1sec,2sec,3sec,4sec,5sec intervals

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Javascript");
}
x();

//output:
//Javascript
//6
//6
//6
//6
//6
