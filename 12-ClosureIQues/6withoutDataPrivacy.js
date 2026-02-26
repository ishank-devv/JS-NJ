// without Data Hiding- since var is global variable, it can be
// changed or access by anybody in code
var count = 0;
function incrementCounter() {
  count++;
}
incrementCounter();
console.log(count); //1
count = 20;
count++;
console.log(count); //21
