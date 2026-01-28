const person = {
  name: "sft",
  age: 22,
  profession: "student",
  salary: 25000,
  married: false,
  "fav places": ["Dhaka", "Chittagong", "Chengdu"],
};

console.log(person);

// dot notation
console.log(person.name);
const income = person.salary;
console.log(income);

// bracket notation
console.log(person["age"]);
const identity = person["married"];
console.log(identity);

console.log(person["fav places"]);

person.salary = 30000;
person["age"] = 23;
console.log(person);

const keyName = "profession";
console.log(person[keyName]);


const proName = 'profession';
person[proName] = 'worker';
console.log(person);