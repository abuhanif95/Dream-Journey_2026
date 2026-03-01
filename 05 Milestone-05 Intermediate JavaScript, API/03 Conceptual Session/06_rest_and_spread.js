// Rest operator
function myFunc(a, b, c, d, ...rest) {
  console.log(a, b, c, d, rest);
}

myFunc(1, 2, 3, 4, 5, 6, 7);

// Spread operator
// Array
let arr = [10, 20, 30];
console.log(...arr);
console.log(Math.max(...arr));
console.log(Math.min(...arr));

// object
const obj = {
  name: "sft",
  age: 21,
};

const output = { ...obj };
console.log(output);
console.log(obj);
