var x = 7;

//During code execution phase( 2nd phase)
// inside gec, another execution context is being created
//to execute this function
function getName() {
  console.log("Hey JS");
}

console.log(x);
console.log(getName);
getName();
