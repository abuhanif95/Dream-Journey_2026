const sections = document.querySelectorAll("section");

for (const section of sections) {
  console.log(section);
  section.style.backgroundColor = "lightblue";
  section.style.border = "2px solid green";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "10px";
  section.style.padding = "10px";
}

console.log(document.getElementById("players-container").childNodes);
console.log(document.getElementById("players-container").childNodes[0]);
console.log(document.getElementById("players-container").childNodes[1]);
console.log(document.getElementById("players-container").childNodes[2]);
console.log(document.getElementById("players-container").childNodes[3]);
console.log(
  document.getElementById("players-container").childNodes[3].childNodes[1],
);
console.log(
  document.getElementById("players-container").childNodes[3].childNodes[1]
    .parentNode,
);
console.log(
  document.getElementById("players-container").childNodes[3].childNodes[1]
    .parentNode.parentNode,
);
console.log(
  document.getElementById("players-container").childNodes[3].childNodes[1]
    .parentNode.parentNode.parentNode,
);
console.log(
  document.getElementById("players-container").childNodes[3].childNodes[1]
    .parentNode.parentNode.parentNode.parentNode.parentNode,
);
console.log(
  document.getElementById("players-container").childNodes[3].childNodes[1]
    .parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
);
console.log(
  document.getElementById("players-container").childNodes[3].childNodes[1]
    .parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    .parentNode,
);

console.log(document.createElement("p"));
console.log(document.createElement("li"));
console.log(document.createElement("h1"));

//create element and set innerText and innerHTML
const newChild = document.createElement("li");
newChild.innerText = "New born baby footballer";
console.log(newChild);

// find the parent where you will add the child
const playerList = document.getElementById("player-list");
playerList.appendChild(newChild);
