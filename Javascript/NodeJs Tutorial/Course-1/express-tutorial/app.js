const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("hello");
    res.end("Hello there!")
})

server.listen(5000);