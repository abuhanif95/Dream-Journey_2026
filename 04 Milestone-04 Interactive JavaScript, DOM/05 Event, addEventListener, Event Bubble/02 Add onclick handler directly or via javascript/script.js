// Option 02: to handle event
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}

function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option 03: getElementById
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.background = "blue";
};

// Option 04: different version
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;

function makePurple() {
  document.body.style.backgroundColor = "purple";
}
