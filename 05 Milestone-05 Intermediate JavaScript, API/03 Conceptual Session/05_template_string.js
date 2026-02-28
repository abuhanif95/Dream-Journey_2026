let name = "sft";
let age = 22;

//Ternary Operator: => condition ? true : false;
let aboutMe = `I am ${name}

I'm ${age} years old.
${age > 18 ? "I am adult" : "I am not adult"}
${age || 20}
I'm a software engineer.`;

console.log(aboutMe);
