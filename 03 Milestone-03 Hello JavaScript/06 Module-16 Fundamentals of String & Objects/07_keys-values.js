const computer = {
  brand: "ASUS Zenbook",
  price: 50000,
  processor: "intel",
  hdd: "512GB",
  monitor: "hp",
};

const Keys = Object.keys(computer);
console.log(Keys);

const Values = Object.values(computer);
console.log(Values);

const university = {
  name: "Sichuan University",
  class: ["11", "12"],
  events: ["Science fair", "Independence Day", "Happy Year"],
  unique: {
    color: "blue",
    result: {
      cgpa: 4,
      merit: "top",
    },
  },
};
console.log(university.name);
console.log(university.unique);
console.log(university.unique.color);

console.log(university.unique.result);
university.unique.result.merit = "top top top";
// console.log(university.unique.result.cgpa);
console.log(university.unique.result.merit);

console.log(university.events);
university.events[1] = "16 Dec";
console.log(university.events);
console.log(university.events[1]);

console.log(university);
delete university.class;
console.log(university);
