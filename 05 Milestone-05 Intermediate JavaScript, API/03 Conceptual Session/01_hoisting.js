// var is hoisted, but only the declaration, not the value assignment

console.log(test);
var test = 123;
console.log(test);

//let and const also hoisted, but not initialization. They are in a "Temporal Dead Zone"
// console.log(name);
let name = "sft";
console.log(name);

// console.log(age);
const age = 23;
