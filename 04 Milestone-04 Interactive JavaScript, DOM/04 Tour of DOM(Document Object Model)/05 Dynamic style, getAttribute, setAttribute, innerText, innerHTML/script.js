const foodElement = document.getElementById("food-title");
console.log(foodElement.innerHTML);

foodElement.innerText = "Food Forever";
foodElement.style.color = "red";
foodElement.style.color = "gold";
foodElement.style.color = "blue";
foodElement.style.backgroundColor = "lightgreen";
foodElement.style.borderRadius = "20px";
foodElement.style.textAlign = "center";
foodElement.style.padding = "10px";
foodElement.style.marginLeft = "10px";

foodElement.classList.add("bg-red");
foodElement.classList.remove("bg-red");
foodElement.classList.add("bold");
foodElement.classList.add("big");
console.log(foodElement.classList);

console.log(foodElement.getAttribute("id"));
console.log(foodElement.getAttribute("class"));

foodElement.setAttribute('title', 'Title or tooltip in JS');