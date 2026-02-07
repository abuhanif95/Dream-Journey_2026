/*
==> Problem 2: Student Marks Analyzer
    Function name: analyzeMarks(marksObj)

    Statement:
    Return total marks, average marks, highest scoring subject, and lowest scoring subject.
    Test case 1

    Input: { math: 78, english: 65, physics: 88, bangla: 55 }
    Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }
*/

function analyzeMarks(marksObj) {
  let total = 0;
  let lowestMark = Infinity;
  let highestMark = -Infinity;
  let highestSubject = null;
  let lowestSubject = null;
  for (let subject in marksObj) {
    let mark = marksObj[subject];
    total += mark;
    if (mark >= highestMark) {
      highestMark = mark;
      highestSubject = subject;
    }
    if (mark <= lowestMark) {
      lowestMark = mark;
      lowestSubject = subject;
    }
  }
  let average = total / Object.keys(marksObj).length;
  //   console.log("Total Marks: ", total);
  //   console.log("Average: ", average);
  //   console.log("Highest mark: ", highestMark);
  //   console.log("Lowest mark: ", lowestMark);
  //   console.log("Highest Subject: ", highestSubject);
  //   console.log("Lowest subject: ", lowestSubject);
  return {
    total,
    average,
    highestSubject,
    lowestSubject,
  };
}

console.log(analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 }));
