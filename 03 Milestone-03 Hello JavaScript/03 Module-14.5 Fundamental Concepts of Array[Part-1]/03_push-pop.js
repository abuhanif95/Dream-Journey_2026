const ages = [];
const numbers = [12, 34, 75, 86];
const friends = ["Sabiha", "Hanif", "Tonika"];

console.log(numbers);
numbers.push(45);
numbers.push(55);
numbers.push(32, 38);
console.log(numbers);

friends.push("Tonu");
console.log(friends);
const out1 = friends.pop();
const out2 = friends.pop();
console.log(friends);
console.log(out1, out2);

numbers.shift();
console.log(numbers);

friends.unshift("Tonu");
console.log(friends);
