//after blocking the main thread we observe setTimeout will execute
//only after the main thread/callstack is unblocked
//means first GEC will execute

console.log("Start");

//due to execute in 5 secs- ( but won't excute in 5 sec as main thread is blocked)
// so it wait in callbackqueue(macrotaskqueue) until main thread is free
//setTimeout doesn't guarantee that it will execute after 5sec, but it gaurantees that it will wait atleast 5sec before execution
setTimeout(function cb() {
  console.log("setTimeout Callback not executed after 5 sec");
}, 5000);

console.log("End");

//simulating million of lines of code- takes 10 secs to excute
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("While loop expires after 10 sec");

//we should avoid blocking our main thread

//OUTPUT----
//Start
//End
//While loop expires after 10 sec
//setTimeout Callback not executed after 5 sec

///callstack-----
//cb function/setTimeout[ executed 2nd]
//GEC [ executed 1st](includes date as well)
