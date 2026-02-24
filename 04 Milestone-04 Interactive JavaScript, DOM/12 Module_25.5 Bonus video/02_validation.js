const number = "23";
// String, number, boolean
if (typeof number === "number") {
  console.log("value is a number");
} else {
  console.log("value is not a number");
}

const numbers = [3, 45, 53, 22];
const student = { name: "sft", job: "swe" };
console.log(Array.isArray(numbers));
console.log(Array.isArray(student ));
console.log(typeof student);
