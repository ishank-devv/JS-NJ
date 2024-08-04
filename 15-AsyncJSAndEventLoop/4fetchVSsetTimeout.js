// how fetch() works- fetch requests an API call and
// returns a promise and callback function inside then will exceute
// once promise is resolved

//microtaskQueue > callback Queue

console.log("Start");

setTimeout(function cbT() {
  console.log("CB setTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});
//million of lines of code
console.log("End");

//output
//Start
//End
//----after GEC executed---
//cbF( due to microtask priority)
//cbT

//callstack-----
//cbT [ executed 3rd]
//cbF [ executed 2nd]
//GEC [ executed 1st]
