const persons = ["Sabiha", "Hanif", "Tonika"];
const sortedPersons = persons.sort();

console.log(sortedPersons);

// sort ==>
/**
Ascending ===> smaller to larger 
Descending ==> larger to smaller
 */
const numbers = [2, 5, 1, 7, 12, 32, 9, 4, 8];

const numbers_asc = [...numbers].sort(function (a, b) {
  return a - b;
});
const numbers_des = [...numbers].sort(function (a, b) {
  return b - a;
});
console.log(numbers_asc);
console.log(numbers_des);
