const employee = {
  name: "John Doe",
  1: "desk one",
  "home-address": "123 main St",
  position: "Software Engineer",
};

//dot notation
console.log(employee.name);
console.log(employee.position);
// console.log(employee.1);
// console.log(employee.home-address);

//bracket notation
console.log(employee["name"]);
console.log(employee[1]);
console.log(employee["home-address"]);

const key = "position";
console.log(employee[key]);

const worker = {
  name: "John Doe",
  1: "desk one",
  "home-address": "123 main St",
  position: "Software Engineer",
  family: {
    father: "Richard",
    // mother: {
    //   name: 'Jane Doe',
    //   age: 55,
    // }
  },
};

const value = employee.name;
console.log(worker.name);

console.log(worker.family?.mother?.age);
