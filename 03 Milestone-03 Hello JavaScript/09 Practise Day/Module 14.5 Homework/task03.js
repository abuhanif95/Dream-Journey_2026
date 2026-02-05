/**
==> Task 03: Checking Array Membership with 'includes()'
    1. Create an array of books containing different book.
    2. Use the includes method to check if the array contains a javascript book.
    3. Print a message to the console indicating whether the element is present in the array or not.
 */

let books = ["JavaScript", "Python", "Java", "C++"];

console.log(books.includes("JavaScript"));

if (books.includes("JavaScript")) {
  console.log("The array contains JavaScript book.");
} else {
  console.log("The array does not contain JavaScript book.");
}
