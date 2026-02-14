console.log(document.getElementById("players-container"));
console.log(document.getElementById("players-container").innerText);
// console.log(document.getElementById("players-container").innerText = 'tom');
console.log(document.getElementById("players-container").innerHTML);

// const sections = document.getElementsByTagName('section');
const sections = document.querySelectorAll("section");
// console.log(sections);

for (const section of sections) {
  console.log(section);
  section.style.backgroundColor = "lightblue";
  section.style.border = "2px solid green";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "10px";
  section.style.padding = "10px";
}

//dynamic class
for (const section of sections) {
  //   section.classList.add("section-card");
}
