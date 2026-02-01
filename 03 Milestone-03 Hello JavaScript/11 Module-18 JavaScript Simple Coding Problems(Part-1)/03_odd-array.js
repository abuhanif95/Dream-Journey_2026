/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

/**
 * 1. Put odd number in an array
 */

function oddAvg(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      //   console.log(number);
      odds.push(number);
    }
  }
  //   console.log(odds);
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum);
  const avg = sum / count;
  return avg;
}

const numbers = [43, 54, 57, 23, 98];
const avg = oddAvg(numbers);
console.log("average of the odd numbers is: ", avg);
