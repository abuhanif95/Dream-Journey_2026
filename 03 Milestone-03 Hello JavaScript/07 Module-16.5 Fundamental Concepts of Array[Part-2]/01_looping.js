/**
 *  Looping Technique
 *  1. for loop
 *  2. while loop
 *  3. do while loop => ignore
 *  4. for of ==> using to find array loop
 *  5. for in ==> using to find object loop
 */

const poors = ["Elon", "Bill", "Mark", "Waren"];

for (const poor of poors) {
  console.log(poor);
}

for (let i = 0; i < poors.length; i++) {
  console.log(i);
  console.log(poors[i]);
}

const numbers = [5, 23, 456, 421, 25, 4512, 54543, 21, 34, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let i = 0;
while (i < poors.length) {
  console.log(poors[i]);
  i++;
}

let n = 0;
while (n < numbers.length) {
  console.log(numbers[n]);
  n++;
}
