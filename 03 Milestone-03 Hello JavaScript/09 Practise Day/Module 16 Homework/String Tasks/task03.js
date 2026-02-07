/**
==> Task 03:
    Check whether a string contains all the vowels a, e, i, o, u
 */

const str = 'Education';
const vowels = ['a', 'e', 'i', 'o', 'u'];

const hasAllVowels = vowels.every(vowel => str.toLowerCase().includes(vowel));
console.log(hasAllVowels);