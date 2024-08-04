//eventListener behind the scenes
// DOM API
//callstack
//callback queue
//event loop

console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
  console.log("Callback");
});

console.log("End");

//output
//Start
//End
//----after event ("click") has triggered by the user---
//Callback

//callstack-----
//cb function inside eventListener[ executed 2nd, as intially it was in "callback queue" not in callstack, as timer expires it was put in "callstack" by "event loop"]
//GEC [ executed 1st]
