// const header = document.getElementById('header');
const header = document.querySelector("#header");
// console.log(header.innerText);
// header.innerHTML = "I have Changed header";
// console.log(header);

// const para = document.getElementsByClassName('text');
// console.log(para)

const para = document.querySelectorAll(".text");
// console.log(para);
para[0].classList.add("hidden");
para[1].classList.remove("hidden");

const btn = document.getElementById("handle");
btn.addEventListener("click", function () {
  para[1].classList.add("highlight");
});

for (let p of para) {
  p.innerText = "Nothing";
}

let box = document.getElementById("box");
// box.innerText = '<p>Hello</p>'
box.innerHTML = `<h1>Hello</h1>`;

const container = document.getElementById("container");
const div = document.createElement("div");
container.appendChild(div);

div.innerHTML = `
  <p>This is a paragraph</p>
  <button>Click</button>
`;

const deligation = document.getElementById('deligation');
deligation.addEventListener('click', function(event){
    console.log(event.target);
})

let arr = [1,2,3,4,5];
const findMethod = arr.find(i => i == 5);
console.log(findMethod);

const filterMethod = arr.filter(i => i % 2 == 0);
console.log(filterMethod);

const another = arr.filter(i => i != 4);
console.log(another);