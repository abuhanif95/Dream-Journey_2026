function tenTimes(number) {
  const result = number * 10;
  return result;
  console.log(result); // it will not work
}

function cutHalt(number) {
  const half = number / 2;
  return half;
}

// tenTimes(5);

// const result = tenTimes(10);
// console.log(result);
console.log(tenTimes(6));

const bigNumber = tenTimes(99);
console.log(bigNumber);
