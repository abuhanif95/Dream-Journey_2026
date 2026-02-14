console.log("Document Object Model");

const student = {
  name: "Hanif",
  id: 107,
  study: function (subject) {
    console.log("Studying subject:", subject);
  },
};

const liCollection = document.getElementsByTagName("li");
console.log(liCollection);

for (const li of liCollection) {
  //   console.log(li);
  console.log(li.innerText);
}

// all h1 tags
const allHeadings = document.getElementsByTagName("h1");
for (const heading of allHeadings) {
  console.log(heading.innerText);
  console.log(heading.innerHTML);
}
