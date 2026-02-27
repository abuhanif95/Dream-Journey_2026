let data; //Falsy
data = 0; //Falsy
data = ""; //Falsy
data = "0"; //Truthy
data = " "; //Truthy
data = false; //Falsy
data = true; //Truthy
data = null; //Falsy
data = undefined; //Falsy
data = { price: 34 }; //Truthy
data = {}; //Truthy
data = [1, 2]; //Truthy
data = []; //Truthy

if (data) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

let price = false;
if (!price) {
  console.log("Falsy");
}

let value = true;
if (!!value) {
  console.log("Truthy");
}
