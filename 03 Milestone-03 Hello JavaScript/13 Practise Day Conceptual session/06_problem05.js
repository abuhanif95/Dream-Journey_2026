function removeDuplicate(numbers) {
  let result = [];
  for (let num of numbers) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(removeDuplicate([5, 3, 5, 2, 3, 9, 2, 7]));
