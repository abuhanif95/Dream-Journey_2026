const salary = 25000;
const isBCS = true;
const height = 170;
const hasCar = false;

/*
if (salary > 20000 && height > 175) {
  console.log("Perfect Husband");
} else {
  console.log("Not perfect");
}
*/

if (salary > 20000 || height > 175) {
  console.log("eso baba kobul");
} else {
  console.log("vaag tui mukbul");
}

// more and more condition
if (salary > 25000 || height > 175 || isBCS) {
  console.log("eso baba kobul");
} else {
  console.log("vaag tui mukbul");
}

if (salary > 25000 && height > 175 && isBCS) {
  console.log("eso baba kobul");
} else {
  console.log("vaag tui mukbul");
}

// ======= Complex Condition =======
if ((salary > 25000 && hasCar == true) || isBCS == true) {
  console.log("Tomar 14 gosti raji");
}
