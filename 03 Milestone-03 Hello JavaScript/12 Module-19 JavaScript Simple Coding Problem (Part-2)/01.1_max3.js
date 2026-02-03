const jim = 256;
const tim = 89;
const kim = 168;

if (jim > tim && jim > kim) {
  console.log("Jim is the ultimate boss");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the boss");
} else {
  console.log("Kim is the boss");
}

// function
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const max3 = maxOfThree(14, 6, 22);
console.log(max3);

const max = Math.max(12, 34, 4, 57);
console.log("Max is :", max);
