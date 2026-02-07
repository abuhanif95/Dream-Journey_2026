/**
==> Task 01: 
    Count how many times a string has the letter 'a'
 */

let str = "JavaScript is a programming language";

// Solution 1: Using a loop
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === "a") {
    count++;
  }
}

console.log(count);
