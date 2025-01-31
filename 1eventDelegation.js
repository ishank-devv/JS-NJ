// HTML structure
// <ul id="parent">
//   <li class="child">Item 1</li>
//   <li class="child">Item 2</li>
//   <li class="child">Item 3</li>
// </ul>

document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches("li.child")) {
    console.log("List item clicked:", event.target.textContent);
  }
});
