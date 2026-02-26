console.log(add(1, 2));
// function declaration
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(2, 3));

// console.log(add2(2,3)); it will not work
// function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};
console.log(add2(3, 4));

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(4, 5));

const multiple = (a, b) => a * b;
const tenTimes = (x) => x * 10;
const tenTimes2 = (x) => x * 10;
const getPI = () => 3.1416;
const addAll = (a, b, c, d, e) => a + b + c + d + e;
const isEven = (num) => num % 2 === 0;

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  const result = sum * diff;
  return result;
};

const divide = (p, q) => p / q;
const diff = (p, q) => p - q;

document.getElementById("btn").addEventListener("click", (event) => {
  console.log("button clicked");
});
