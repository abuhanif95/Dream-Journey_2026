// const items = document.getElementsByClassName('item');
// for(const item of items){
//     item.addEventListener('click', function(event){
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });

document
  .getElementById("btn-add-item")
  .addEventListener("click", function (event) {
    const ol = document.getElementById("item-list");

    const li = document.createElement("li");
    li.classList.add("item");
    li.innerText = "Brand New Item Added";

    ol.appendChild(li);
  });
