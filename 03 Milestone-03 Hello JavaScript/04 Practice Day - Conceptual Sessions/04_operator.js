/**
 *     3 types of operators
 *
 * 1. Arithmetic Operator: +, -, /, *, %
 * 2. Comparison Operator: ==, ===, >, <, >=, <=, !=, !==
 * 3. logical Operator: &&, ||, !
 */

// Arithmetic operator
let num1 = 12;
let num2 = 5;

console.log(num1 + num2); // addition
console.log(num1 - num2); // substitution
console.log(num1 * num2); // multiplication
console.log(num1 / num2); // division
console.log(num1 ** num2); // power
console.log(num1 & num2); // modulas

// comparison Operator => output always boolean
console.log(50 == "50"); //check only value
console.log(50 === "50"); // check value and data-type both
console.log(50 != "40");
console.log(50 !== "40");
console.log(50 < 23);
console.log(50 > 23);
console.log(50 <= 23);
console.log(50 <= 50);
console.log(50 >= 23);
console.log(50 >= 50);


// Logical Operator 
let isMarried = true;
let isStudent = false;

console.log(isMarried);
console.log(isStudent);
console.log(false && false);
console.log(false && true);
console.log(false || false);
console.log(false || true);

console.log(!isMarried);