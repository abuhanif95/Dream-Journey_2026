const country = "Bangladesh";
const division = "Chittagong";
const district = `Chittagong`;
const thana = new String("Lohagara");

console.log(thana);

// Array is mutable ==> you can change the array elements
const numbers = [54, 98, 78, 21, 65];
console.log(numbers.length);
console.log(numbers[3]);

console.log(numbers);
numbers[2] = 43;
console.log(numbers);

// String is immutable ==> not changeable
const capital = " Dhaka ";
console.log(capital.length);
console.log(capital[3]);

console.log(capital);
capital[3] = "C";
console.log(capital);
