// odd numbers

// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 20; i += 2) {
//   console.log(i);
// }

//give me the list numbers between 1 to 30 divisible by 3
let total = 0;
for (let i = 1; i < 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
    total = total + i;
    console.log("Total = ", total);
  }
}

// for (let i = 1; i < 20; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }
