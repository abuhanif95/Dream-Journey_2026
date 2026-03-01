let person = {
  name: "sft",
  age: 22,
  getInfo: () => {
    console.log(`My name is ${person.name}`);
  },
};

//access property's value
// dot notation
console.log(person.name);
console.log(person.age);

//Bracket notation
console.log(person["name"]);

let name = "name";
console.log(person[name]);

// Object.keys, Object.values
let keys = Object.keys(person);
console.log(keys);
console.log(keys.length);

let values = Object.values(person);
console.log(values);

let entries = Object.entries(person);
console.log(entries);

// for in and array method after object.keys
for (let property in person) {
  console.log(property);
  console.log(person[property]);
}

for (let key of keys) {
  console.log(person[key]);
}

// freeze, seal, delete
delete person.age;

Object.seal(person);
person.name = "sht";
person.hobby = "football";

Object.freeze(person);
person.name = "sht";
delete person.name;
console.log(person);

// copy obj

let person2 = { ...person };
console.log(person2);
