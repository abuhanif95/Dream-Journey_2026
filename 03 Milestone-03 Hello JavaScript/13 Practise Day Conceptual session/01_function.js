function blenderMachine(fruit) {
  console.log(`I received ${fruit} to make ${fruit} juice`);
}

blenderMachine("Mango");

// let num1 = 50;
// let num2 = 100;
// let sum = num1 + 2;

// if (sum % 2 === 0) {
//   console.log("Yes, This is even number");
//   console.log("I do something");
// } else {
//   console.log("No, This is odd number");
//   console.log("I do something");
// }

function evenOdd(num1, num2) {
  let sum = num1 + num2;
  if (sum % 2 === 0) {
    console.log("Yes, This is even number");
    console.log("I do something");
  } else {
    console.log("No, This is odd number");
    console.log("I do something");
  }
}

evenOdd(4, 7);
evenOdd(44, 30);
evenOdd(35, 65);

function sum(num1, num2) {
  let sum = num1 + num2;
  let result = sum * 5;
  return result;
}

let result = sum(3, 5);
console.log(result);

// parameter arr and obj
function sumArray(arr) {
  console.log(arr);
  let sum = 0;

  for (let number of arr) {
    sum += number;
  }
  return sum;
}

let sumOfArr = sumArray([10, 20, 30, 40, 50]);
console.log(sumOfArr);

function countObjectProperty(obj) {
  console.log(obj);
  let count = Object.keys(obj).length;
  console.log(count);
}

let person = {
  name: "sft",
  age: 22,
  roll: 29,
};

countObjectProperty(person);
