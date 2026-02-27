// Double equal does type coercion
console.log(2 == 2);
console.log(2 == "2");
console.log(1 == true);
console.log(0 == false);
console.log(true == '1');
console.log(false == '0');
console.log(null == undefined);
console.log(NaN == NaN);

//Triple Equal Compares the data type first. if data types are different, it returns false. if data type are same, ite compares the values and returns true or false accordingly.
// console.log(2 === 2);
// console.log(2 === 3);
// console.log(2 === "2") 