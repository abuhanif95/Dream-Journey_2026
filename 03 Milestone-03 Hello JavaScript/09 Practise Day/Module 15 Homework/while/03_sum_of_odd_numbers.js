/**
==> Subtask 01:
    Display sum of all the odd numbers from 91 to 129.
 */
let i = 91;
let sum = 0;

while (i <= 129) {
  if (i % 2 !== 0) {
    sum += i;
  }
  i++;
}

console.log(sum);

/**
==> Subtask 02:
    Display sum of all the even numbers from 51 to 85.
 */
let j = 51;
let sum2 = 0;

while (j <= 85) {
  if (j % 2 === 0) {
    sum2 += j;
  }
  j++;
}

console.log(sum2);
