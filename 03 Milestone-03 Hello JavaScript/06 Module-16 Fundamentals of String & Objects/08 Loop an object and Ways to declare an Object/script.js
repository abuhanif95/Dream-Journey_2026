const mobile = {
  brand: "real me",
  price: 10000,
  color: "black",
  camera: "12mp",
  inNew: true,
};

// for of : array
// for in : object
for (const prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  console.log(key, ":", mobile[key]);
}

const pen = {
    brand : 'econo',
    price : 10,
    color : 'black'
}

const pencil = new Object();
console.log(pencil);

const rubber = Object.create({})
console.log(rubber);