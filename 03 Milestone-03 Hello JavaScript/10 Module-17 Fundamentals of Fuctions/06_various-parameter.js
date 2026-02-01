/**
 * for a given string tell me whether it has even number of characters or not
 */

function evenSizeString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 == 0) {
    console.log("even size");
  } else {
    console.log("odd size");
  }
}

evenSizeString("sft");
evenSizeString("tonu");

function doubleOrTriple(number, doDouble) {
  if (doDouble) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));

function numberOfElements(numbers) {
  const len = numbers.length;
  return len;
}

numberOfElements([23, 43, 65, 678, 3, 5]);

function getAge(person){
    const age = person.age;
    return age;
}