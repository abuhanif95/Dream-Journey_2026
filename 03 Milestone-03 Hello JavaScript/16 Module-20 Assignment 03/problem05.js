/*
Problem-05: Text Analyzer for an AI Company
*/
function analyzeText(str) {
  // Your code here
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }

  let words = str.split(" ");
  let longwords = "";

  for (const word of words) {
    if (word.length > longwords.length) {
      longwords = word;
    }
  }

  let token = 0;
  for (const char of str) {
    if (char !== " ") {
      token++;
    }
  }

  return {
    longwords,
    token,
  };
}

console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));
console.log(analyzeText("Programming is fun"));
console.log(analyzeText("A quick brown fox"));
console.log(analyzeText(""));
