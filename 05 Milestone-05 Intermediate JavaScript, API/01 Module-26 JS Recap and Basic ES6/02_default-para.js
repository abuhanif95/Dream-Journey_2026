function add(num1, num2) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}

add(12, 20);
add(10); //NaN -> Not a Number

function add2(num1, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}
add2(20);

function fullName(first, last = "") {
  const name = first + " " + "last";
  console.log(name);
}

console.log("mehmed", "hossen");
console.log("mehmed");

function multiply(num1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}

multiply(2, 4);
multiply(5);

/**
 * string => ''
 * number => 0 [for add]
 * number => 1 [for multiply]
 * array => []
 * object => {}
 * boolean => false
 */