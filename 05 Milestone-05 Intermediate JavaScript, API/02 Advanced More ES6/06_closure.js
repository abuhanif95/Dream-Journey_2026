function outerFunction() {
  function innerFunction() {
    console.log("This is the inner Function");
  }
  return innerFunction;
}

const output = outerFunction();
output();
console.log(output);

function counter(owner) {
  let count = 0;
  function increment() {
    count++;
    console.log("Value of Count", owner, count);
  }
  return increment;
}
// const count1 = counter();
// count1();
// count1();
// count1();

const rahimCounter = counter("Rahim");
rahimCounter();
rahimCounter();
const karimCounter = counter("Karim");
karimCounter();
karimCounter();
mCounter = counter("Rahim");
rahimCounter();
rahimCounter();
