// const product = {
//   name: "iPhone",
//   price: 12999,
//   description: "A smartphone by Apple",
// };

// const newPrice = product.price + 1000;
// const phoneName = `this is ${product.name}`;

// const price = product.price;
// const name = product.name;

const {
  name,
  price: productPrice,
  brand,
  camera = "12MP",
} = {
  name: "iPhone",
  price: 12999,
  brand: "Apple",
  description: "A smartphone by Apple",
};
console.log(name);
console.log(productPrice);
console.log(brand);
console.log(camera);

const [first, second, ...third] = [10, 20, 30, 40, 50];
console.log(first, second);
console.log(third);

// const [height, weight] = numbers;
