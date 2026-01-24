/**
 * Ternary Operator ==> Three parts
 *
 *   ?   :
 *
 * Condition ? Do something when true : Do something when false
 */

const age = 12;
// if(age >= 18){
//     console.log("You can vote");
// }else{
//     console.log("You can't vote");
// }

age >= 18 ? console.log("You can vote") : console.log("You can't vote");

let price = 1500;
const isLeader = true;

if (isLeader == true) {
  price = 0;
} else {
  price = price + 100;
}

// console.log(price);

price = isLeader == true ? 0 : price + 100;

if (isLeader == true) {
  if (price > 1000) {
    price = price / 2;
  } else {
    price = 0;
  }
} else {
  price = price + 100;
}

price = isLeader === true ? price > 1000 ? price/2 : 0 : price + 100;