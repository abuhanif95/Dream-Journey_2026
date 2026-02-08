function finalScore(omr) {
  //write your code here
  if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
    return "Invalid";
  }

  if (
    typeof omr.right !== "number" ||
    typeof omr.wrong !== "number" ||
    typeof omr.skip !== "number"
  ) {
    return "Invalid";
  }

  const total = omr.right + omr.wrong + omr.skip;
  if (total !== 100) {
    return "Invalid";
  }

  const finalMarks = omr.right * 1 + omr.wrong * -0.5 + omr.skip * 0;

  return Math.round(finalMarks);
}

console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
console.log(finalScore({ right: 50, wrong: 10, skip: 40 }));
console.log(finalScore({ right: 30, wrong: 30, skip: 40 }));
console.log(finalScore("!@#"));
console.log(finalScore(["Raj"]));
