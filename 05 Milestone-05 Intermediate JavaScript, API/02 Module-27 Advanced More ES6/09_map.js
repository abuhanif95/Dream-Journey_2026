const numbers = [1, 2, 3, 4, 5];

const doubled = [];
for (const num of numbers) {
  doubled.push(num * 2);
}

console.log(doubled);

// const doubleIt = num => num * 2;
// const double = numbers.map(doubleIt);

const double = numbers.map((num) => num * 2);
const squared = numbers.map((num) => num * num);
console.log(double);
console.log(squared);

const friends = ["zabed", "naved", "sajed"];
const firstLetters = friends.map((friend) => friend[0]);
console.log(firstLetters);

const products = [
  { name: "laptop", price: 45000 },
  { name: "Mobile", price: 35000 },
  { name: "Tablet", price: 15000 },
];

const prices = products.map((product) => product.price * 2);
const names = products.map((product, index, productArray) => {
    const upperCaseName = product.name.toUpperCase();
    console.log(index, upperCaseName, productArray);
    return upperCaseName;
});
console.log(prices);
console.log(names);
