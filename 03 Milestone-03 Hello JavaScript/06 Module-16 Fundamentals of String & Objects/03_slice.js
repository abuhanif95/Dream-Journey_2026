const address = "chengdu";
const part = address.slice(2, 5);

console.log(part);

const sentence = "He is a good and hard-working person";
console.log(sentence.split(" "));
// console.log(sentence.split("a"));

const fav = "Sabiha, Hanif, Tonika";
const favName = fav.split(",");
console.log(favName);

const real = ["Sabiha", " Hanif", " Tonika"];
console.log(real.join(" ||"));

const firstName = "Sabiha";
const lastName = "Hanif";

// const fullName = firstName + lastName;
const fullName = firstName + " " + lastName;
console.log(fullName);

const fullName2 = firstName.concat(" ").concat(lastName);
console.log(fullName2);


// includes 
console.log(lastName.includes('T'));