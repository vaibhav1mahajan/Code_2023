/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let  str = str1.toLowerCase().split("").sort().join("");
    let  stra = str2.toLowerCase().split("").sort().join("");
    if(str==stra) return true;
    else return false;
}

module.exports = isAnagram;

let str = 'Debit Card'
let str2 = 'Bad Credit'
console.log(str2.split("").sort().join("").to)
