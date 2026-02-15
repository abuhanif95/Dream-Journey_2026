// List item 2 click handler
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item 2 clicked");
  // event.stopPropagation()
  event.stopImmediatePropagation();
});

// List item 2 click handler
document.getElementById("item-2").addEventListener("click", function (event) {
  console.log("item 2 second clicked");
});

// ol click handler
document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    console.log("ol clicked");
  });

// Section Container click handler
document
  .getElementById("list-container")
  .addEventListener("click", function (event) {
    console.log("section clicked");
  });

// Body click handler
document.getElementById("body").addEventListener("click", function (event) {
  console.log("body clicked");
});
