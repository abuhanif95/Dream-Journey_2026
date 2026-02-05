/**
==> Problem: 04
    What will be the result of the following codes:
      
        1. const a = isNan('11');
        2. const b = isNan(2-10);

        Explain your answer.
 */

const a = isNaN('11');
const b = isNaN(2 - 10);

console.log("Result of isNaN('11'): ", a); // false, because '11' can be converted to a number
console.log("Result of isNaN(2 - 10): ", b); // false, because -8 is a valid number