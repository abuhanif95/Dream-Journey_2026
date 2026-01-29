/**
===>> Primarily 2 types of data type
1. Primitive ==> string, number, boolean, undefined, null
2. Non-Primitive ==> Array and object 
 */

// let number1 = 10;
// let number2 = 20;
// let number3 = 30;
// let number4 = 40;
// let number5 = 50;

// 0 based index
let arr = [10, 20, 30, 40, 50];

// Access array element
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[80]);

// How many elements in array
console.log(arr.length);

// insert
arr.push(60); // insert value at last
arr.unshift(5); // insert value at first
console.log(arr);


// Remove 
arr.pop(); // remove value at last
arr.shift(); // remove value at first
console.log(arr);