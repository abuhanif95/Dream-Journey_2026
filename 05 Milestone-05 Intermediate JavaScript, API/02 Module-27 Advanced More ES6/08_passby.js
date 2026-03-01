function multiply(a, b) {
  a -= 5;
  b -= 10;
  console.log(a, b);
  return a * b;
}

let x = 10;
let y = 20;
console.log("Before calling", x, y);
const result = multiply(x, y);
console.log(result);
console.log("After calling", x, y);

function firstSum(arr1, arr2) {
  arr1[0] = 100;
  arr2[0] = 200;
  const first = arr1[0];
  const second = arr2[0];
  return first + second;
}

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log("Before the function call: ", num1, num2);
const output = firstSum(num1, num2);
console.log("After the function call: ", num1, num2);

function add(num1, num2) {
  console.log("arguments: ", arguments);
  const args = [...arguments];
  console.log(args);
  return num1 + num2;
}

add(1, 2, 3, 4);
