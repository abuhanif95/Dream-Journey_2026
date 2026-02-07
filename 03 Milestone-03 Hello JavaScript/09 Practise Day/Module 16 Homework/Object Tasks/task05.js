/**
==> Task 05: 
    Loop trough an object and print the key-value pairs with their types

    Input: 
    let myObject = {
        name: "John Doe",
        age: 30,
        city: "New York",
        isStudent: true
};
 */

let myObject = {
  name: "John Doe",
  age: 30,
  city: "New York",
  isStudent: true,
};

for(let key in myObject) {
    console.log(`Key: ${key} | Type: ${typeof myObject[key]}`);
}