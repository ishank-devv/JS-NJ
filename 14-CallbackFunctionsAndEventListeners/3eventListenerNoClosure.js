//counter without using closure(no data hiding)- not good practice
let count = 0;
document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Button Clicked", ++count);
});
