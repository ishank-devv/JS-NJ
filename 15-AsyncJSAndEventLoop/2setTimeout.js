//setTimeout behind the scenes
//callstack
//callback queue
//event loop

console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 5000);

console.log("End");

//output
//Start
//End
//----after 5 sec timer expires---
//Callback

//callstack-----
//cb function/setTimeout[ executed 2nd, as intially it was in "callback queue" not in callstack, as timer expires it was put in "callstack" by "event loop"]
//GEC [ executed 1st]
