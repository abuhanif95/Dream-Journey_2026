function eatRice() {
  console.log("Wash hand");
  console.log("please sit");
  console.log("take the food in the plate");
  console.log("please eat");
}

eatRice();

// 3 ---> 3*3 = 9
// 4 ---> 4*4 = 16
// 5 ---> 5*5 = 25
// 11 --> 11*11 = 121

function square(number) {
  console.log("value of the number parameter", number);
  const square = number * number;
  console.log("square of the given number is:", square);
}

square(4);
console.log("-----------");
square(5);

square(405);
square(12);

function addNumber(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}

addNumber(5, 74);
addNumber(65, 31);

function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(a, b, c, d, e);
  console.log(total);
}

addAll(2, 3, 4, 5);
addAll(4, 5, 2, 6, 8);
