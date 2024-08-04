//problem with event listeners is they form closure with outer scope
// ie. closure and global
//so count will be using the memory whether we click the "click me" button or not
//thats why we need to remove event listeners and free up the memory
//check->elements->Event Listeners-> handlers-> closure
function attachEventListener() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked", ++count);
  });
}
attachEventListener();
