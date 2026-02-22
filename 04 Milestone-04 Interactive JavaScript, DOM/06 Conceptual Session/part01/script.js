// // console.log('Hello');

// // const heading = document.getElementById("mainTitle");
// // console.log(heading);
// // heading.innerText = "Fruits";

// const heading = document.querySelector("#mainTitle");
// heading.innerText = "Fruits for Ramadan";

// // const fruitList = document.getElementsByClassName("list-item");
// // console.log(fruitList);
// // fruitList[0].innerText = "Mango";

// const fruitList = document.querySelectorAll(".list-item");
// console.log(fruitList);
// fruitList[1].innerText = "Watermelon";
// fruitList[0].style.color = "purple";
// for (let list of fruitList) {
//   list.style.color = "blue";
// }

// // const mainDiv = document.querySelector("#mainDiv");
// // console.log(mainDiv.children[1]);

// const image = document.querySelector("img");
// console.log(image);
// image.setAttribute("alt", "update.jpg");

// document.getElementById("btn").addEventListener("click", function () {
//   const count = document.getElementById("count");
//   let countUpdate = parseInt(count.innerText);
//   countUpdate++;
//   count.innerText = countUpdate;
// });

// const wishListBtns = document.querySelectorAll('.wishlist-btn-card');
// wishListBtns.forEach(btn =>{
//     btn.addEventListener('click', function(){
//         const wishCount = document.getElementById('wish-count');
//         let currentWishCount = parseInt(wishCount.innerText);
//         currentWishCount++;
//         wishCount.innerText = currentWishCount;

//     })
// })
let cart = [];

const button = document.querySelectorAll(".add-to-cart-btn");

button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const card = e.target.closest(".product-card");
    const productCategory = card.querySelector(".category-name").textContent;
    const productName = card.querySelector(".product-name").textContent;
    const price = card.querySelector(".price").textContent;
    const productPrice = parseFloat(price);

    const product = {
      productCategory,
      productName,
      productPrice,
      quantity: 1,
    };

    addToCart(product);
  });
});

function addToCart(product) {
  const existingItem = cart.find(
    (item) => item.productName == product.productName,
  );
  if (existingItem) {
    existingItem.quantity++;
  } else {
    card.push(product);
  }

  updateCard();
}

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

function updateCard() {
  cartItems.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  card.forEach((item, index) => {
    total = total + item.productPrice * item.quantity;
    totalItems = totalItems + item.quantity;

    const div = document.createElement("div");
    div.innerHTML = `
       ${item.productName} (X ${item.quantity}) - ${(item.productPrice * item.quantity).toFixed(2)}
       <button onClick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
  });
  cartCount.innerText = totalItems;
  totalPrice.innerText = "$" + total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCard();
}
