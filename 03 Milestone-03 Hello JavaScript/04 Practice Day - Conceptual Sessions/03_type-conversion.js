let age = "22";
console.log(age);
console.log(typeof age);

//Converted string to number

// age = Number(age); //Way 1
// console.log(age);
// console.log(typeof age);

age = parseInt(age); //way 2
console.log(age);
console.log(typeof age);

//Converted number to string
let roll = 345;
console.log(String(roll));
console.log(typeof roll);

let cgpa = "2.34";
console.log(parseFloat(cgpa));

let floatSum = 0.1 + 0.2;
console.log(Number(floatSum.toFixed(2)));
