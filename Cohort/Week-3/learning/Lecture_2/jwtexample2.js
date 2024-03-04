const user = {
        "name": "Vaibhav",
        "age": 19,
        "iat": 1706968687   
}
const jwt = require('jsonwebtoken');
const token = jwt.sign(user,"hello");
console.log(token);