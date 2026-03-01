//Array destructure
let arr = [1, 2, 3, 4, 5, 6, 7];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// console.log(one, two, three);

let [one, two, three, , , six] = arr;
console.log(one, two, three, six);

// Object destructure
let person = {
  name: "sft",
  roll: 22,
  address: {
    city: "ctg",
    country: "Bangladesh",
  },
  isMarried: false,
  hobby: ["football", "badminton"],
};

// let name = person.name;
// let roll = person.roll;

// console.log(name, roll);

let {
  roll,
  name: myName,
  address: { city, country },
  hobby,
} = person;
console.log(roll, myName, city, hobby);
