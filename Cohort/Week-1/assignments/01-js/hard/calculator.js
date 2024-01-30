/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  a = 0;
  add(x){
    this.a += x;
  }
  subtract(x){
    this.a -= x;
  }
  multiply(x){
    this.a*=x;
  }
  divide(x){
    if(x==0){
       throw new Error();
    } else{
      this.a/=x;
    }
  }
  clear(){
    this.a=0;
  }
  getResult(){
    return this.a;
  }
  calculate(str){
    // str = str.replace(/\s/g,"");
    try {
      let result = eval(str);
      if(isNaN(result) || !isFinite(result)){
        throw new Error("Invalid input");
      }
      return this.a = result;
    } catch (error) {
      throw new Error("Invalid string");
    }
  }
}
let str = "2+        2    ";

try {
    let result = eval(str);
    console.log(result); // Output: 4
} catch (error) {
    console.error("Error evaluating string:", error);
}
module.exports = Calculator;
