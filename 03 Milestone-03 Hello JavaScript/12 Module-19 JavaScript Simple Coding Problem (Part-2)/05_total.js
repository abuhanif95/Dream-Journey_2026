const products = [
  { name: "shampoo", price: 300 },
  { name: "comb", price: 100 },
  { name: "shirt", price: 700 },
  { name: "pant", price: 1200 },
];

function getShoppingTotal(products) {
  let total = 0;
  for (const product of products) {
    total = product.price + total;
  }
  return total;
}

const total = getShoppingTotal(products);
console.log("Total cost: ", total);
