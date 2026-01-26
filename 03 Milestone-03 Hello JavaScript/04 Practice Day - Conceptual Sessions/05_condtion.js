/*
if(true){
   Do something
}else{
    if false then do 
}
*/

let result = 2.33;

if (result === 4.0) {
  console.log("A+");
} else if (result >= 3.5) {
  console.log("A");
} else if (result >= 3.0) {
  console.log("B");
} else {
  console.log("You have to improve");
}

//Problem 01
let orderAmount = 900;
if (orderAmount >= 1000) {
  console.log("Free Delivery");
} else {
  console.log("Delivery charge 80");
}

// Ternary Operator
let isMatured = true;
let isInterested = false;

let isMarried = isMatured ? console.log("Go to marry") : console.log("Be a mature");
console.log(isMarried);