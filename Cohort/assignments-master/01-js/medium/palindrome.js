/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/ /g,'').replace(/[^\w\s]/g,'');
  let start =0;
  let end = str.length-1;
  while(start<=end){
    if(str[start]!=str[end]){
      return false;
    }
    start++;
    end--;
  }
  return true;
}
// let str = "Eva, can I see bees in a cave?";
// let a = str.toLowerCase().replace(/ /g,'').replace(/[^\w\s]/g,'');
// str = str.toLowerCase().replace(" /g","").replace("/[^\w\s]/g","");
// console.log(a);
// console.log(str);
// let b = "absc degab";
// console.log(b.replace(/a/g,''));
module.exports = isPalindrome;
