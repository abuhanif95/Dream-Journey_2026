const max = Math.max(2, 4, 5, 1, 54, 6, 9, 4);
console.log(max);

const numbers = [3, 52, 4, 5, 1, 45, 6, 9, 4];
const max2 = Math.max(...numbers);
console.log(max2);

console.log(numbers);
console.log(...numbers);

const params = [45, 12, 3];
function sum(x, y, z) {
  console.log(x, y, z);
  return x + y + z;
}

const result = sum(...params);
console.log(result);

// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 55];
arr2.push(4);
console.log(arr1);
console.log(arr2);

const person = { name: "alice", age: 30 };
// const person2 = person;
const person2 = { ...person, designation: "Developer" };
person2.salary = 30000;
console.log(person);
console.log(person2);
