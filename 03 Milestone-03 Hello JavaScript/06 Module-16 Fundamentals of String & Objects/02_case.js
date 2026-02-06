const school = "North Amirabad M.B High School";

console.log(school);
console.log(school.toLocaleLowerCase());
console.log(school.toUpperCase());

// uppercase: ABCDEFGHIJ
// lowercase: abcdefghij

const subject = "Chemistry";
const book = "chemistry";

if (subject.toLowerCase() === book.toLocaleLowerCase()) {
  console.log("Reading Book");
} else {
  console.log("Not reading");
}

const drink = "water";
const liquid = "   water  ";

if (drink.trim() === liquid.trim()) {
  console.log("fresh water");
} else {
  console.log("salty water");
}
