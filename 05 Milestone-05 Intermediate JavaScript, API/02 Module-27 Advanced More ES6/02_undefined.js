let data;
console.log(data);

const sum = (a, b) => {
  console.log(a, b);
};
sum();
sum(3);

const student = {
  name: "Hanif",
  age: 22,
  salary: null,
};

delete student.name;

console.log(student.marks);
console.log(student.name);
console.log(student.salary);

const arr = [1, 2, 3, 5];
console.log(arr[3]);
console.log(arr[5]);

delete arr[1];
console.log(arr);

console.log(typeof undefined);
console.log(typeof null);

function test() {
  console.log("hello");
//   return;
}

const result = test();
console.log(result);
