const person = {
  name: "John Doe",
  age: 25,
  city: "New York",
  occupation: "Engineer",
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

console.log(person);
console.log(typeof person);

// JSON => JS object with Notation
// JSON.stringify => JSON
// JSON.parse => object

const personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);
console.log(typeof parseJSON);
