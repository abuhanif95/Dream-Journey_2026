/**
==> Task 04: Checking if it's an Array
    Instructions:
        1. Create different variables, each containing either an array or a non-array value.
        2. Now use isArray to check if each variable is an array.
        3. Print a message to the console indicating whether each variable is an array or not.
 */

let variable1 = [1, 2, 3];
let variable2 = "Hello, World!";
let age = '22';

console.log(Array.isArray(variable1)); 
console.log(Array.isArray(variable2));  
console.log(Array.isArray(age));