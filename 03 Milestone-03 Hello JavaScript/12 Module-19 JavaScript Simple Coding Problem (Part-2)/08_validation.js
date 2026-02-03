function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide a number";
  }
  const multiply = num1 * num2;
  return multiply;
}

const result = multiply(5, "7");
console.log(result);

function fullName(first, last) {
  if (typeof first !== "string") {
    return "First name should be string";
  } else if (typeof last !== "string") {
    return "Last name should be string";
  }
  const full = first + " " + last;
  return full;
}

const full = fullName("sft", 2);
console.log(full);

function getPrice(product) {
  if (typeof product !== "object") {
    return "Please provide an object";
  }
  const price = product.price;
  return price;
}

const price = getPrice({ name: "comb", price: 35, color: "blue" });
// const price = getPrice(5);
console.log(price);

function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return "Please provide an array";
  }
  const second = numbers[1];
  return second;
}

const second = getSecond([1, 35, 69]);
console.log(second);
