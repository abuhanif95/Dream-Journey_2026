/**
==> Task 04:
    If a given string has either x, replace x by y. if the given string has X, replace it by Y.
 */

const str = "This is an example string with x and X.";
const result = str.replace(/x/g, "y").replace(/X/g, "Y");

console.log(result);

const str2 = "Max and Xavier";
const result2 = str2
  .split("")
  .map((char) => {
    if (char === "x") return "y";
    if (char === "X") return "Y";
    return char;
  })
  .join("");

console.log(result2);
