/**
==> Task 01: 
    Count how many times a string has the letter 'a' or 'A
 */

let str = "JavaScript is A programming language";
// Using a loop
let count = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i].toLowerCase() === "a") {
    count++;
  }
}

console.log(count);

// Using split and filter
let count2 = str.split("").filter(char => char.toLowerCase() === "a").length;
console.log(count2);
