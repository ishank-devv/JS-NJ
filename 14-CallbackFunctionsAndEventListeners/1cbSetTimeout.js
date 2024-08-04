// How callback is used in Asynchronous tasks

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

//output
//x
//y
//----after 5 sec---
//timer
