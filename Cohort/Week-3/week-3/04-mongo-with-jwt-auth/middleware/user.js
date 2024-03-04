const jwt = require('jsonwebtoken');
const {jwtPassword} = require('../config')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    // Split the header string by space
    const parts = token.split(" ");
    let jwtToken;
    // Check if the header has two parts and the first part is 'Bearer'
    if (parts.length === 2 && parts[0] === "Bearer") {
      // Extract the token part (second part)
       jwtToken = parts[1];
    } else {
      res.json({
          message:"Invalid token"
      })
    }
    try {
      const decoded = jwt.verify(jwtToken,jwtPassword);
      if(decoded.username){
        req.headers.username = decoded.username;
          next();
      } else{
          res.json({
              message:"You are not authenticated"
          })
      }
    } catch (error) {
      res.json({
          message:"You are not authenticated"
      })
    }
  
}

module.exports = userMiddleware;