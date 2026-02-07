/*
==> Task 04:
    Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

    Input: const statement = 'I am a hard working person';
    Output: 'person working hard a am I';
*/

const statement = "I am a hard working person";

let reverseStatement = statement.split(" ");
result = reverseStatement.reverse().join(" ");
console.log(result);
