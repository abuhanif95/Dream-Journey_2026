function multiply(a, b = 1) {
  const result = a * b;
  console.log(a, b);
  return result;
}

const output = multiply(2, 5);
console.log(output);

console.log(multiply(3));
