let str = "sfthanif";

// size check
console.log(str.length);

// access specific character by index
console.log(str[0]);

// compare two string
let str2 = "Sfthanif";

// convert to capital or small
console.log(str.toLowerCase());
console.log(str2.toUpperCase());
console.log(str.toLowerCase() == str2.toLowerCase());

// trim: to remove space from beginning and end
let str3 = "  sabiha moni   ";
console.log(str3.trim());
console.log(str3.toUpperCase());

// slice: to slice a string
// slice(start index, end before)
let love = " I love you moni";
console.log(love.slice(2, 6));

// includes: to check specific portion
console.log(love.includes("moni"));

// concat:
let newStr = str + love;
console.log(newStr);

let str4 = str2.concat(str3);
console.log(str4);

// replace:
console.log(love.replace("moni", "Tonu"));
console.log(love);

// split
// It's very useful for reverse a string
let str1 = "I love my sweetheart";
// let strArr = str1.split(" ");
// console.log(strArr);
// let reverseArr = strArr.reverse();
// let reverseStr = reverseArr.join(" ");

// console.log(reverseArr);

// Shorthand
let reverseStr = str1.split(" ").reverse().join(" ");
console.log(reverseStr);


// count a specific letter
let string = "I love you my sweetheart";

let sCount = 0;
for(let i =0; i < string.length; i++){
    let letter = string[i];
    if(letter.toLowerCase() == 's'){
        sCount += 1; 
    }
}
console.log(sCount);