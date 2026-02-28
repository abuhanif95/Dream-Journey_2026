// var hoisted (Bad Practice);
// let and const hoisted but in Temporal Dead Zone

// var redeclare with same name
var name = "Neymar";
var name = "Junior";
console.log(name);

//can't redeclare same name
let age = 22;
// let age = 23;
// const age = 24;
console.log(age);

// Difference 03
// reassign allowed  by var and let but not const
var nationality = "Bangladeshi";
nationality = "France";
console.log(nationality);

let roll = 23;
roll = 22;
console.log(roll);

const fullName = "Hello world";
// fullName = "Hello";
console.log(fullName);

//Difference 04
// scope
// var maintains only function scope, but not block and global scope
// let and const maintain all scope

