const king = {
  name: "Mufasa",
  age: 55,
  kingdom: "Pride Lands",
};

const keys = Object.keys(king);
console.log(keys);

const values = Object.values(king);
console.log(values);

const entries = Object.entries(king);
console.log(entries);

// Object.freeze(king);
Object.seal(king); 

delete king.age;
delete king.kingdom;
king.queen = "Sarabi";
king.name = "King Simba";
console.log(king);
