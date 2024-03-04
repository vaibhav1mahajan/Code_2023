const jwt = require('jsonwebtoken')

const user = {
    name:"Vaibhav",
    age:19
}
const token =  jwt.sign(user,"hello");
// console.log(token);
const decoded = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmFpYmhhdiIsImFnZSI6MTksImlhdCI6MTcwNjk2ODY4N30.w-OCUXrm-4ioMYGHLIt4vfRjYf-gCHHw8eddsRw6wfk","hello");
console.log(decoded);