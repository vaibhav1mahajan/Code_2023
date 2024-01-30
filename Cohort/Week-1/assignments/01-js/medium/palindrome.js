/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str1 = str.replace(/[^\w]/g, '').toLowerCase().split("").join("");
  let a =0;
  let b = str1.length-1;
  while(a<=b){
    if(str1[a]!=str1[b]){
      return false;
    }
    a++;
    b--;
  }
  return true;
}

module.exports = isPalindrome;
