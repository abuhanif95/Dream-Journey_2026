let arr = ["Sabiha", "Hanif", "Tonika", "Tonu"];
let arr2 = [true, false, false, true];

console.log(arr);
console.log(arr2);

// Method: includes, isArray, indexof, reverse, join
let arr3 = [10, 20, 30, 40, 50];
let arr4 = "Moni";

// includes: check a value that exist or not
console.log(arr.includes("Tonu"));
console.log(arr.includes("Fahim"));
console.log(arr3.includes(50));

// isArray: to check array or not
console.log(Array.isArray(arr));
console.log(Array.isArray(arr4));

// indexof: to find number by element
console.log(arr.indexOf("Tonu"));
console.log(arr2.indexOf(60));

// reverse:
console.log(arr.reverse());
console.log(arr3.reverse());

// Join: to convert a string
let str = arr.join(" ");
console.log(str);
console.log(typeof str);
