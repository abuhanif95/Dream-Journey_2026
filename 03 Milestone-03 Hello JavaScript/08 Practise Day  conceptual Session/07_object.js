// Object ==> non primitive data type

let bikeColor = "Black";
let bikeBrand = "Honda";
let bikeCC = 120;
let bikePillion = 2;
let bikeMilage = 35;
let isMeterDigital = true;
let bikeAdvantage = ["Less Milage", "High speed", "low configuration"];

let bike = {
  // key/property: value
  color: "Black",
  brand: "Honda",
  cc: 130,
  pillion: 3,
  milage: 23,
  isMeterDigital: true,
  advantages: ["Less Milage", "High speed", "low configuration"],
  battery: {
    color: "black",
    durability: "strong",
    warranty: "2 Years",
  },
};

console.log(bike);

// access a specific property or key
// 1. dot notation
// 2. bracket notation[]

console.log(bike.color); // dot notation
console.log(bike.advantages); // dot notation
console.log(bike.battery); // dot notation

console.log(bike["milage"]); // bracket notation
console.log(bike["isMeterDigital"]); // bracket notation

// loop iteration over object
for (let key in bike) {
  console.log(key, bike[key]);
}

console.log(Object.values(bike));
let bikeKeys = Object.keys(bike);
console.log(bikeKeys.length);

for(let i =0; i< bikeKeys.length; i++){
    let key = bikeKeys[i];
    let value = bike[key]
    console.log(i, ':', bikeKeys[i], ':', value);
}