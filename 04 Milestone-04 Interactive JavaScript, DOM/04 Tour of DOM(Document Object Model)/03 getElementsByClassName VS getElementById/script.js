// get by id

const foodTitleH1 = document.getElementById("food-title");
console.log(foodTitleH1.innerText);

const bandElement = document.getElementById("band");
bandElement.innerText = "jalali Sleeping bag";

// get elements by class name
const foreignElements = document.getElementsByClassName("foreign");
console.log(foreignElements);

for (const element of foreignElements) {
  console.log(element.innerText);
}
