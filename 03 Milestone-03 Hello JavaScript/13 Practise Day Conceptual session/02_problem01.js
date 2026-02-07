/*
==> Problem 01: Word Frequency Counter
    Function name: wordFrequency(sentence)

    Statement: Count how many times each word appears in a
               sentence and return the result as an object.
    
    Rules: 
        - Ignore case differences
        - Ignore extra spaces
*/

function wordFrequency(sentence) {
  let words = sentence.split(" ");
  let wordsCount = {};

  for (const word of words) {
    let wordLower = word.toLowerCase();
    if (wordsCount.hasOwnProperty(wordLower)) {
      wordsCount[wordLower]++;
    } else {
      wordsCount[wordLower] = 1;
    }
  }
  return wordsCount;
}

let output = "I love js and I love coding and Js is fun";
console.log(wordFrequency(output));
