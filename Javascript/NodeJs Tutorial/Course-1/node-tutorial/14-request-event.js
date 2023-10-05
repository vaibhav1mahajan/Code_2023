const http = require('http');


// old way
// const server = http.createServer((req,res)=>{
//     res.end('Welcome to our website');
// })

// another way

const server = http.createServer();


server.on('request',(req,res)=>{
    res.end("Welcome to our website")
    // console.log("Welcome to our website");
})
server.listen(5000);