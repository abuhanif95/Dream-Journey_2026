/**
 * array has some duplicate elements
 * []
 */
const biryanikhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 4, 64, 24, 67, 3, 64, 87, 5, 4, 81];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

// const uniqueArray = noDuplicate(biryanikhor);
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
