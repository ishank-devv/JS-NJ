//because let variable is block scope so at each iteration of for loop, it create different copy of i has seperate memory space
//when setTimeout is called, i is different and callback function form a closure with new variable each time
//when i = 1, 2,3,4,5..each closure is different with each i
//each setTimeout binds with different i

function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Javascript");
}
x();

//output
//Javascript
//1
//2
//3
//4
//5
