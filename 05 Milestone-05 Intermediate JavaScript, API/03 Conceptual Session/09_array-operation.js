// map, filter, find, forEach, reduce

let arr = [1, 2, 3, 4, 5, 6];

// Loop through
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let el of arr) {
//   console.log(el);
// }

// map => update/modify element fo an array:
let updatedArr = arr.map((item, index, array) => {
  // console.log(item, index, array);
  return item * 2;
});
console.log(updatedArr);

//Filter => filter multiple elements
let even = arr.filter((item) => {
  return item % 2 === 0;
});
console.log(even);

// Find => find a single element
const findFive = arr.find((item) => {
  return item == 15;
});
console.log(findFive);

// forEach =>
arr.forEach((el, index, arr) => {
  console.log(el, index, arr);
});

// reduce =>
let sum = arr.reduce((acc, curr) => {
  //   console.log(acc, curr);
  return acc + curr;
}, 0);
console.log(sum);