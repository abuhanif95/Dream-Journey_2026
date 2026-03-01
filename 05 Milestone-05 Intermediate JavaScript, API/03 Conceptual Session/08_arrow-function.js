// Traditional Function
// Traditional function is hoisted, but arrow function is not hoisted

console.log(multiply(3, 4));
function multiply(a, b) {
  return a * b;
}

// console.log(multiplication);
let multiplication = function multiply(a, b) {
  return a * b;
};

// arrow function
const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 4));

const sqrt = (a) => a * a;
console.log(sqrt(5));

// function myFuncNormal(){
//     console.log(this);
// }
// myFuncNormal();

// const myFuncArrow = () => {
//   console.log(this);
// };

let person = {
  name: "sft",
  age: 21,
  // showMyInfo: () =>{
  //     console.log(this.name);
  // }
  showMyInfo: function () {
    console.log(this.name);
  },
};

person.showMyInfo();
