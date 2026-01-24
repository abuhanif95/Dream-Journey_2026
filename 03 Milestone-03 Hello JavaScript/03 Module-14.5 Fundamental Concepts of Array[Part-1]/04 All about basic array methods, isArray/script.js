const friends = ["Sabiha", "Hanif", "Tonika"];
console.log(friends.includes("Tonika"));
console.log(friends.includes("Tonu"));

if (friends.includes("Tonika")) {
  console.log("Sweetheart");
} else {
  console.log("Miss you SweetHeart");
}

console.log(friends.indexOf("Tonika"));
console.log(friends.indexOf("Tonu"));

const age = 22;
const nums = [];
const food = "Noodles";

console.log(Array.isArray(friends));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));
console.log(Array.isArray(age));
