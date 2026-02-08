/*
==> Problem-04: Upcoming Gono Vote
*/

function gonoVote(array) {
  //write your code here
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let haVote = 0;
  let naVote = 0;

  for (const vote of array) {
    if (vote === "ha") {
      haVote++;
    } else if (vote === "na") {
      naVote++;
    }
  }

  if (haVote > naVote) {
    return true;
  } else if (haVote === naVote) {
    return "equal";
  } else {
    return false;
  }
}

console.log(gonoVote(["ha", "na", "ha", "na"])); // "equal"
console.log(gonoVote(["ha", "na", "na"])); // false
console.log(gonoVote(["ha", "ha", "ha", "na"])); // true
console.log(gonoVote("ha, na")); // "Invalid"
console.log(gonoVote(12345)); // "Invalid"
