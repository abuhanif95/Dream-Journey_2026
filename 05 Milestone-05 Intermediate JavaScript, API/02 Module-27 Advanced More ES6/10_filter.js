const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

const friends = ["zabed", "naved", "sajed", "Nahid"];
const firstLetter = friends.filter((friend) => friend[0] == "n");
console.log(firstLetter);

const products = [
  { name: "laptop", price: 45000 },
  { name: "Mobile", price: 35000 },
  { name: "Tablet", price: 15000 },
];

const expensive = products.filter((exp) => exp.price > 30000);
console.log(expensive);

const cheap = products.find((cheap) => cheap.price < 12000);
const perfect = products.find((cheap) => cheap.price > 12000);
console.log(cheap);
console.log(perfect);

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);