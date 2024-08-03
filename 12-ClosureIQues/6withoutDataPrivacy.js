// without Data Hiding- since var is global variable, it can be
// changed or access by anybody in code
var count = 0;
function incrementCounter() {
  count++;
}
incrementCounter();
console.log(count);
count = 20;
count++;
console.log(count);
